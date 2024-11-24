import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  // Definir HSP médio por região
  obterHSPPorRegiao(latitude: number): number {
    if (latitude >= -5) {
      return 5.5; // Norte e Nordeste
    } else if (latitude < -5 && latitude >= -15) {
      return 5; // Centro-Oeste
    } else if (latitude < -15 && latitude >= -25) {
      return 4.5; // Sudeste
    } else {
      return 4; // Sul
    }
  }

  // Função para obter a localização e ajustar o HSP
  ajustarHSPPorLocalizacao(callback: (hsp: number | null) => void): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const hspDiaria = this.obterHSPPorRegiao(latitude);
          callback(hspDiaria);
        },
        () => {
          alert(
            'Não foi possível obter a localização. Por favor, insira a HSP manualmente.'
          );
          callback(null);
        }
      );
    } else {
      alert(
        'Geolocalização não suportada no navegador. Insira a HSP manualmente.'
      );
      callback(null);
    }
  }

  // Função de cálculo da potência necessária
  calcularPotenciaSistema(
    consumoMensal: number,
    hspDiaria: number,
    eficiencia: number = 0.8
  ): number {
    return +(consumoMensal / (hspDiaria * 30 * eficiencia)).toFixed(2);
  }
}
