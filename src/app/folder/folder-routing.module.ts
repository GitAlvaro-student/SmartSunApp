import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pagina/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'fornecedores',
    loadChildren: () => import('./pagina/fornecedores/fornecedores.module').then( m => m.FornecedoresPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pagina/main/main.module').then( m => m.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
