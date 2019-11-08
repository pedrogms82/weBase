import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
// import { UserService } from '../../services/user.service';
import { Usuario } from '../../others/interfaces';
import { FormBuilder, FormGroup,  Validators, FormControl  } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ApiService]
})
export class LoginComponent implements OnInit {

  public datosLogin: any;
  // public userObj =  { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null};
  public userData: Usuario = <Usuario> { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null}; ;
  
  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {

    this.datosLogin = new FormGroup ({
      Email: new FormControl('', Validators.required),
      Pass: new FormControl('', Validators.required)
    })

  }



  public login() {

    let datosForm = "";
    datosForm =  datosForm + '&email='+this.datosLogin.controls['Email'].value; 
    datosForm =  datosForm + '&pass='+this.datosLogin.controls['Pass'].value;

    this.apiService.login(datosForm)
          .subscribe(
            result => {
              this.userData = <Usuario>result;
              console.log("UserData", this.userData);
            },
            error => {
              console.log("Error ", error);
            }
          );
  }

  /**
   * reload
   */
  public reload() {
    this.router.navigateByUrl('/Header', {skipLocationChange: true}).then(()=>
    this.router.navigate(["Your actualComponent"])); 
  }
}
