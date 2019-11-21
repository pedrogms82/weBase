import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// SERVICIOS
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';
import { Usuario } from 'src/app/others/interfaces';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ApiService,
            UserService]
})
export class UserComponent implements OnInit {

  public userData: Usuario = null;

  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
    userService.getUserData().subscribe(userData => this.userData = userData);
    if (this.userData.Token === null) { this.router.navigate(['/login']); }
  }

  ngOnInit() {


  }

  public actualizar() {

  }
}
