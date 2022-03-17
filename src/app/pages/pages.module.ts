import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { MenuComponent } from './menu/menu.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    EncuestaComponent,
    MenuComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
