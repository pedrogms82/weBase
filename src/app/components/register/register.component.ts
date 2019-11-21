import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup,  Validators, FormControl  } from '@angular/forms';
// import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService]
})

export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;
  public datosRegistro: any;
  public respuesta: any = null;
  public error: any = null;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.datosRegistro = new FormGroup({
      Email: new FormControl('', Validators.required),
      Pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Name: new FormControl('', Validators.required),
      Apellidos: new FormControl('', Validators.required),
      Empresa: new FormControl('', Validators.required)
  });
  }

  public registro() {

    let datosForm = '';
    datosForm =  datosForm + '&email=' + this.datosRegistro.controls.Email.value;
    datosForm =  datosForm + '&pass=' + this.datosRegistro.controls.Pass.value;
    datosForm =  datosForm + '&name=' + this.datosRegistro.controls.Name.value;
    datosForm =  datosForm + '&apellidos=' + this.datosRegistro.controls.Apellidos.value;
    datosForm =  datosForm + '&empresa=' + this.datosRegistro.controls.Empresa.value;



    this.apiService.register(datosForm)
        .subscribe(
          result => {
            this.respuesta = result;
            // console.log('Resultado Busqueda', result);
            setTimeout(() => {
                                this.router.navigate(['/user']);
                            },
                            5000);
          },
          error => {
            this.error = error;
            console.log('Error ', error);
          }
        );

  }



}


