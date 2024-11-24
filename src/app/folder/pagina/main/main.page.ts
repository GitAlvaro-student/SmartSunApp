import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalculadoraService } from 'src/app/services/calculadora.service';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage {
  valorConta: number | undefined; // Valor da conta de luz (em R$)
  consumoMensal: number | undefined; // Consumo em kWh
  tamanhoPropriedade: number | undefined; // Tamanho da propriedade em m²
  resultado: string | undefined; // Resultado a ser exibido
  hspDiaria: number | null = null;
  investimentoViavel: string | undefined;
  custoInstalacao: number | undefined;
  payback: number | undefined;
  reducaoConta: number | undefined;
  economiaAnual: number | undefined;
  mensagemErro: string | undefined;
  

  constructor(private calculadoraService: CalculadoraService) {}

  
  calcular() {
    // Limpar mensagem de erro e resultado anteriores
    this.mensagemErro = undefined;
    this.resultado = undefined;

    // Verificar se todos os campos estão preenchidos e válidos
    if (
      this.valorConta === undefined ||
      this.consumoMensal === undefined ||
      this.tamanhoPropriedade === undefined ||
      this.hspDiaria === undefined ||
      this.valorConta <= 0 ||
      this.consumoMensal <= 0 ||
      this.tamanhoPropriedade <= 0 ||
      this.hspDiaria! <= 0
    ) {
      this.mensagemErro = 'Por favor, preencha todos os campos com valores válidos.';
      return;
    }

    // Verificação de valores positivos
    if (this.valorConta <= 0 || this.consumoMensal <= 0 || this.tamanhoPropriedade <= 0) {
      this.resultado = 'Os valores devem ser maiores que zero.';
      return;
    }


    // Cálculo da Tarifa(Preço pago por kw)
    const tarifa = (this.valorConta / this.consumoMensal);

    // Custo Total do Sistema para Instalação
    this.custoInstalacao = (this.tamanhoPropriedade * 250)

    // Consumo Anual baseado nos valores passados
    const consumoAnual = (this.consumoMensal*12);

    // Potência Necessária para a Situação
    const potencia = this.calculadoraService.calcularPotenciaSistema(
      this.consumoMensal!,
      this.hspDiaria!);

    // energia Gerada Pelo Sistema de Painéis Solares em 25 anos
    const energiaGerada = potencia * this.hspDiaria! * 9125;
    
    // Custo por kW com a instlação dos painéis
    const custoKwpaineis = (this.custoInstalacao/energiaGerada);

    // Economia por kWh
    const economiakWh = (tarifa - custoKwpaineis)

    // Economia total com a instalação
    const economiaTotal = consumoAnual*(economiakWh)

    // Retorno do Investimento
    this.payback = this.custoInstalacao/economiaTotal

    if(this.payback < 25){
      this.investimentoViavel = 'Viável'
    } else{
      this.investimentoViavel = 'Não Viável'
    }

    // Economia anual com base em 70% de redução na conta
    this.economiaAnual = (this.valorConta * 12 * 0.7);

    // Porcentagem de Redução da Conta
    this.reducaoConta = (this.economiaAnual / consumoAnual) * 100;
    
    this.resultado = `Investimento ${this.investimentoViavel}
    Custo da Instalação: R$ ${this.custoInstalacao.toFixed(2)}
    Payback: ${this.payback.toFixed(2)}
    Redução da Conta: ${this.reducaoConta.toFixed(2)}
    Economia Anual: R$ ${this.economiaAnual.toFixed(2)}`
    
  }

  // Ajustar HSP automaticamente
  ajustarHSP(): void {
    this.calculadoraService.ajustarHSPPorLocalizacao((hsp) => {
      if (hsp !== null) {
        this.hspDiaria = hsp;
      }
    });
  }


}