import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path : '',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
