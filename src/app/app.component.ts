import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Energia Solar', url: '/folder/pagina/main', icon: 'paper-plane'},
    { title: 'Blog', url: '/folder/pagina/blog', icon: 'library'},
    { title: 'Fornecedores', url: '/folder/pagina/fornecedores', icon: "storefront" },
    { title: 'Perfil', url: '/folder/pagina/login', icon: "person" },
    { title: 'Logout', url: '/folder/pagina/login', icon: "exit" },
  ];
  public labels = [];
  constructor() {}
}
