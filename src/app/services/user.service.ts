import { Injectable } from '@angular/core';
import { Usuario } from '../others/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData: Usuario;

  constructor() {

    console.log('contructor servico user');

  }



}
/* Intento con user service
  // tslint:disable-next-line: max-line-length
  public globalData = new BehaviorSubject<Usuario>({Token: 'GlobalData', Nombre: 'nombre', Apellidos: 'apellidos', Email: null, Empresa: null, isLogged: false});
  // public globalData = new BehaviorSubject<Usuario>;
  public userData: Usuario;

  constructor() {

    console.log('contructor servico user');

  }

  public getUserData() {
    console.log('Devuelvo el usuario almacenado', this.globalData.getValue() );
    return this.globalData.getValue();
    // console.log('Devuelvo el usuario almacenado', this.globalData.asObservable() );
    // return this.globalData.asObservable();
  }


  public getUserDataObs(): Observable<Usuario> {

    console.log('Devuelvo el usuario almacenado', this.globalData.asObservable() );
    return this.globalData.asObservable();
  }

  public setUserData(data: Usuario)  {
    console.log('Voy al seteo del usuario', data);

    this.userData = data;
    console.log('userdata', this.userData);
    this.globalData = new BehaviorSubject<any>(data);
    this.globalData.next(data);
    console.log('globaldata', this.globalData.getValue());
  }
}
*/
