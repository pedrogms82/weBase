import { Injectable } from '@angular/core';
import { Usuario } from '../others/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public globalData = new BehaviorSubject<any>('');
  public startData = { Token: null, Nombre: 'nombre', Apellidos: 'apellidos', Email: null, Empresa: null, isLogged: false} as Usuario;
  //
  // public userData: Usuario = null as Usuario;
  // console.log("GLOBALDATA", this.globalData);

  constructor() {
    this.globalData.next(this.startData);
    // console.log('GLOBALDATA', this.globalData);
  }

  public getUserData(): Observable<Usuario> {
    // console.log(this.globalData);
    return this.globalData.asObservable();
  }

  public setUserData(data: Usuario)  {
    // console.log(data);
    this.globalData.next(data);
    // console.log(this.globalData);
  }
}
