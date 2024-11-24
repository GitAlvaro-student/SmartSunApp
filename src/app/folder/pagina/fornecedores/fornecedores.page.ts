import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.page.html',
  styleUrls: ['./fornecedores.page.scss'],
})
export class FornecedoresPage implements OnInit {

  fornecedores = [
    {
      image: '/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.32.13_f2366ff6.jpg',
      title: 'NeoSolar',
      link: 'https://www.neosolar.com.br/loja?msclkid=a52e3f6a02fc13131eb5585f426f096c&utm_source=bing&utm_medium=cpc&utm_campaign=B%20-%20%5BS%5D%20Institucional&utm_term=neo%20solar%20painel%20solar&utm_content=%5BNeosolar%5D',
      localizacao: 'São Paulo'
    },
    {
      image: '/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.33.31_e23e221d.jpg',
      title: 'EletroBidu',
      link: 'https://energiasolar.eletrobidu.com.br/lpm-02/?campanha=google-k-beta&criativo=rede-palavras-indaiatuba&social=1&utm_source=google&utm_medium=cpc&utm_campaign=[pesquisa]-[GSI]-Indaiatuba_Beta-202304&utm_term=painel%20solar%20preço&utm_content=c-g;b-;kwd-3388340556--&gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjEr6hmht-wLshOSusiPwC60tLwTJOWG_hefYd_MNzeRgYSxXfOpbYhoCEekQAvD_BwE',
      localizacao: 'São Paulo'
    },
    {
      image:'/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.36.58_f315a762.jpg',
      title: 'Minha Casa Solar',
      link:'https://www.minhacasasolar.com.br/painel-solar',
      localizacao: 'São Paulo'
    },
    {
      image:'/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.37.44_ebaad83e.jpg',
      title: 'Aldo Solar',
      link:'https://www.aldo.com.br/',
      localizacao: 'São Paulo'
    },
    {
      image:'/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.34.22_931f719a.jpg',
      title: 'Tek Distribuidor',
      link:'https://www.tekdistribuidor.com.br/painel-solar?srsltid=AfmBOopLYWQFEXtRCa42wXJ4psHw3LybIVaWG45Ukf4_DdNOWjUojTaj',
      localizacao: 'São Paulo'
    },
    {
      image:'/assets/Imagem do WhatsApp de 2024-11-13 à(s) 21.34.55_8bc2f316.jpg',
      title: 'Portal Solar',
      link:'https://www.portalsolar.com.br/distribuidor-fornecedor-equipamentos-energia-solar-fotovoltaica.html',
      localizacao: 'São Paulo'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  openExternalLink(url: string) {
    window.open(url, '_blank');
  }
}
