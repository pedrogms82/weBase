import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// SERVICIOS
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

// MODELOS
import { Usuario } from 'src/app/others/interfaces';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiService,
            UserService]
})
export class UserComponent implements OnInit {

  public userData: Usuario;

  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
    userService.getUserDataObs().subscribe(userData => this.userData = userData);
    console.log(this.userData);

    if (this.userData.Token === 'empty') {
      this.router.navigate(['/login']);
      console.log('Usuario no logeado');
    }
  }

  ngOnInit() {


  }

  public actualizar() {

  }
}
