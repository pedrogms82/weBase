import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../others/interfaces';
import { FormBuilder, FormGroup,  Validators, FormControl  } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ApiService ]
})
export class LoginComponent implements OnInit {

  public datosLogin: any;
  // public userObj =  { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null};
  public userData: Usuario = { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null} as Usuario;

    constructor(
    // tslint:disable-next-line: variable-name
    private _apiService: ApiService,
    // tslint:disable-next-line: variable-name
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {

    this.datosLogin = new FormGroup ( {
      Email: new FormControl('', Validators.required),
      Pass: new FormControl('', Validators.required)
    } );

  }

  public login() {

    let datosForm = '';
    datosForm =  datosForm + '&email=' + this.datosLogin.controls.Email.value;
    datosForm =  datosForm + '&pass=' + this.datosLogin.controls.Pass.value;

    this._apiService.login(datosForm)
          .subscribe(
            result => {
              this.userData = result as Usuario;
              // console.log('UserData', this.userData);
              // tslint:disable-next-line: no-unused-expression
              this._userService.setUserData(this.userData);
              this.router.navigate(['/dashboard']);
            },
            error => {
              console.log('Error', error);
            }
          );
  }
}
