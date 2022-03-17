import { surveyInterface } from './interfaces/survey.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  //`${ base_url }/reportes/total`

  getAll(){
    return this.http.get(`${ API_BASE }/encuestas`);
  }

  create(encuesta: surveyInterface){
    return this.http.post(`${ API_BASE }/encuestas`, encuesta);
  }

  update(mail: string, encuesta: surveyInterface){
    return this.http.put(`${ API_BASE }/encuestas`,encuesta);
  }

  delete(mail: string){
    return this.http.delete(`${ API_BASE }/encuestas`);
  }

}
