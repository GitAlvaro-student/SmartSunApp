import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Energia Solar', url: '/folder/outbox', icon: 'paper-plane'},
    { title: 'Blog', url: '/folder/pagina/blog', icon: 'library'},
    { title: 'Perfil', url: '/folder/pagina/login', icon: "person" },
    { title: 'Fornecedores', url: '/folder/pagina/fornecedores', icon: "storefront" },
    { title: 'Clima', url: '/folder/pagina/login', icon: "sunny" },
    { title: 'Login', url: '/folder/pagina/login', icon: "exit" }
  ];
  public labels = [];
  constructor() {}
}
