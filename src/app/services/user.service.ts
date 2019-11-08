import { Injectable } from '@angular/core';
import { Usuario } from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData: Usuario = <Usuario> { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null};
  public userToken: any;

  constructor() { }

  public getUserToken(){
    console.log("Recupero el token", this.userToken);
    return this.userToken;
  }

  public setUserToken(token){
    this.userToken = token;
    console.log("Guardo el token", this.userToken);
  }

  public getUserData(){
    console.log(this.userData);
    return this.userData;    
  }

  public setUserData(data){
    console.log(data);    
    this.userData = data;    
    console.log(this.userData);    
  }
}
