import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// SERVICIOS
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

// MODELOS
import { Usuario } from 'src/app/others/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  public userData: Usuario;

  constructor(private userService: UserService, private router: Router) {
    this.userData = userService.getUserData();
    console.log(this.userData);
  }

  ngOnInit() {
    let pepe: Usuario = this.userService.getUserData();
    console.log('Veamos que llega', pepe); }


  public buscaUser() {
    let miUser: Usuario = this.userService.getUserData();
    console.log('miUser', miUser);
    let miUserObs: Usuario;
    this.userService.getUserDataObs().subscribe(userData => miUserObs = userData );
    console.log('miUserObs', miUserObs);
  }
}
