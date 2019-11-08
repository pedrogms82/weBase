import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup,  Validators, FormControl  } from '@angular/forms';
// import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ApiService]
})

export class RegisterComponent implements OnInit {
  
  public formRegister: FormGroup;
  public datosRegistro: any;
  public respuesta: any;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formRegister = this.formBuilder.group({
    //     Email:['', Validators.required],
    //     Pass:['', Validators.required],
    //     Name:['', Validators.required],
    //     Apellidos:['', Validators.required],
    //     Empresa:['', Validators.required]        
    // });

    this.datosRegistro = new FormGroup({
      Email: new FormControl('', Validators.required),
      Pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Name: new FormControl('', Validators.required),
      Apellidos: new FormControl('', Validators.required),
      Empresa: new FormControl('', Validators.required)        
  });
    
    console.log("formulario ",this.datosRegistro);
  }

  public registro(){

    let datosForm = "";
    datosForm =  datosForm + '&email='+this.datosRegistro.controls['Email'].value; 
    datosForm =  datosForm + '&pass='+this.datosRegistro.controls['Pass'].value;
    datosForm =  datosForm + '&name='+this.datosRegistro.controls['Name'].value;
    datosForm =  datosForm + '&apellidos='+this.datosRegistro.controls['Apellidos'].value;
    datosForm =  datosForm + '&empresa='+this.datosRegistro.controls['Empresa'].value;

    

    this.apiService.register(datosForm)
        .subscribe(
          result => {
            this.respuesta = result;
            console.log("Resultado Busqueda", result);
          },
          error => {
            console.log("Error ", error);
          }
        );

  }



}


