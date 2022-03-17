import { EncuestaComponent } from './encuesta/encuesta.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';

const pagesRoutes: Routes = [
    {
    path: '', redirectTo: 'menu',
    pathMatch: 'full'
    },
    {
      path: 'menu',
      component: MenuComponent,
    },
    {
      path: 'encuestas',
      component: EncuestaComponent,
    },
    {
      path: 'resultados',
      component: ResultadosComponent,
    }
]

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PAGES_ROUTES { }
