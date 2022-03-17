import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  encuestas: any[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAll()
      .subscribe((data:any)=> this.encuestas = data);
  }

  /**
  * Metodo encargado de obtener todas las encuestas almacendas en la Base de datos *
  */
  getAll(){
    this.appService.getAll()
      .subscribe((data:any) => this.encuestas = data)
  }
}
