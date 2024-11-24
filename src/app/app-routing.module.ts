import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./folder/pagina/main/main.module').then( m => m.MainPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./folder/pagina/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./folder/pagina/blog/blog.module').then(m => m.BlogPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./pagina/blog.module').then( m => m.BlogPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
