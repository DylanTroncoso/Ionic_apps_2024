import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./logged/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'justify',
    loadChildren: () => import('./logged/justify/justify.module').then( m => m.JustifyPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./logged/clases/clases.module').then( m => m.ClasesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
