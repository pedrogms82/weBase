import { Component } from '@angular/core';
import { Router } from '@angular/router';
// SERVICIOS
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
// MODELOS
import { Usuario } from '../../others/interfaces';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'appBone';

  // Creamos variable
  public globalData = new BehaviorSubject<any>('');
  public userData: Usuario =
  { Token: 'id', Nombre: 'nombre', Apellidos: 'apellidos', Email: null, Empresa: null, isLogged: false } as Usuario;

  // Creamos suscripcion a datos de usuario
  constructor(private apiServide: ApiService, private userService: UserService, private router: Router) {
    userService.getUserDataObs().subscribe(userData => this.userData = userData);
        }

  public salir() {
     this.userData =  { Token: 'id', Nombre: 'nombre', Apellidos: 'apellidos', Email: null, Empresa: null, isLogged: false} as Usuario;
     this.router.navigate(['/']);
  }
}
