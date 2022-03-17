import { surveyInterface } from './../../interfaces/survey.interface';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, AbstractControl  } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

    surveyForm: FormGroup
    estilos:string[]=["Rock","Pop","Jazz", "Clasica"]
    seleccionado:string="";
    encuestas: any[] = [];

    constructor(
      private appService: AppService,
      private formBuilder: FormBuilder,
      ) {
        this.surveyForm = this.formBuilder.group({
          email: ['', [ Validators.required, this.emailValidator]],
          musicStyle: ['',  Validators.required],
        });
     }

    ngOnInit(): void {

    }

    /**
    * Metodo encargado de enviar las respuestas de las encuestas realizadas por el usuario a la Base de Datos *
    */

     sendSurveyForm(){
      if(this.surveyForm.invalid) return;
      const {email,musicStyle} = this.surveyForm.controls;

      const encuesta: surveyInterface = {
        email:email.value,
        musicStyle: musicStyle.value
      };

      this.appService.create(encuesta)
        .subscribe(resultado => {
          if(resultado==null){
            Swal.fire({
              allowOutsideClick:false,
              icon: 'error',
              title: 'Email ya registrado',
              text: "Ingrese otro email valido"
            })
          }else{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Respuesta enviada',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    }

  /*
  * Metodo encargado de validar que el email ingresado por el usuario sea válido, para lo cual *
  * se compara con una expresión regular que comprueba que el email sea válido.                *
  */
    emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
      if(control && control.value){
        let existEmailFormal = control.value.toLowerCase()
        .match(
          /^(([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+)(([\s][;]+[\s](([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+))*)$/
        );
        return existEmailFormal? null : {emailError: true }
      }
      return null;
    }
  }
