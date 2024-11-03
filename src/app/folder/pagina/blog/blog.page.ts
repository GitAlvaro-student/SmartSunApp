import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blogPosts = [
    {
      image: 'https://ciclovivo.com.br/wp-content/uploads/2024/05/geracao-energia-solar-ciclo.jpg',
      title: 'Limpeza de Placas Solares Garante Eficiência do Sistema',
      link: 'https://ciclovivo.com.br/mao-na-massa/faca-voce-mesmo/limpeza-de-placas-solares-garante-eficiencia-do-sistema/'
    },
    {
      image: 'https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Fportalsolar-images.s3.us-east-2.amazonaws.com%2Finstitucional-and-info-production%2Fimages%2F1bd2351b-053f-4e62-b770-44b5ade14a52%2Fenergia-limpa.jpg&w=750&q=100',
      title: 'Energia limpa: o que é, fontes, principais tipos e importância',
      link: 'https://www.portalsolar.com.br/energia-limpa'
    },
    {
      image:'https://canalsolar.com.br/wp-content/uploads/2021/01/Ilustracao-de-um-sistema-solar-fotovoltaico-residencial.jpg',
      title: '10 coisas para saber antes de instalar um sistema fotovoltaico de energia solar',
      link:'https://alphasolar.com.br/sistema-fotovoltaico-de-energia-solar/'
    },
    {
      image:'https://www.enelgreenpower.com/content/dam/enel-egp/immagini/learning-hub/energia-eolica/Eolico-vantaggi_2400x1160.jpg',
      title: 'Todas as vantagens da energia eólica',
      link:'https://www.enelgreenpower.com/pt/learning-hub/energias-renoveveis/energia-eolica/vantagens-energia-eolica'
    },
    {
      image:'https://www.aldo.com.br/blog/wp-content/uploads/2021/01/blog_aldosolar_Saiba-tudo-sobre-as-fontes-de-Energia-Renovaveis.jpg',
      title: 'Vídeo: As 5 Principais Fontes de Energia Renováveis',
      link:'https://youtu.be/rs-kBJKCABA?si=XzHbYFvoZSRhrsjd'
    },
    {
      image:'https://hccenergiasolar.com.br/wp-content/uploads/2024/01/usina-sol.webp',
      title: 'Casos de sucesso: histórias reais de pessoas que adotaram a energia solar em suas casas.',
      link:'https://redimax.com.br/historias-reais-de-pessoas-que-adotaram-a-energia-solar-em-suas-casas/?srsltid=AfmBOoqs2zcNL6s69YHi9K6owezRoLin87XCNn3Dj78hoFowKNe6-8h0'
    },
    {
      image:'https://clickpetroleoegas.com.br/wp-content/uploads/2024/05/Por-que-as-placas-solares-podem-pegar-fogo-Entenda-os-riscos-e-precaucoes-na-instalacao-de-energia-solar.jpg.webp',
      title: 'Por que as placas solares podem pegar fogo? Entenda os riscos e precauções na instalação de energia solar',
      link:'https://clickpetroleoegas.com.br/por-que-as-placas-solares-podem-pegar-fogo-entenda-os-riscos-e-precaucoes-na-instalacao-de-energia-solar/'
    },
    {
      image:'https://traveleiros.com/wp-content/uploads/2023/08/Imagem-Post-medio-1-1.jpg.webp',
      title: 'Placas solares: como instalar no motorhome – O guia completo',
      link:'https://traveleiros.com/blog/placas-solares-como-instalar-no-motorhome-o-guia-completo/'
    },
    {
      image:'https://energybrasilsolar.com.br/novo/wp-content/uploads/2021/10/foto-de-capa-do-texto-energia-solar-industria.jpg',
      title: '5 Benefícios da Energia Solar para a Indústria',
      link:'https://energybrasilsolar.com.br/novo/2021/10/11/energia-solar-para-a-industria/'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  
  openExternalLink(url: string) {
    window.open(url, '_blank');
  }
}
