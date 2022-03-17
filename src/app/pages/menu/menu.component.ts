import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  * Metodo encargado de mostrar un mensaje de información sobre la aplicación *
  */

  acercade(): void{
    Swal.fire({
      title: 'Acerca de..',
      text: 'aplicación para encuestar a las personas sobre los estilos de música que prefieren',
      footer: 'App Desarrollada para la prueba técnica de 3IT'
    })

  }

}
