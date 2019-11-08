import { Component, OnInit, Input, Host } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

import { Usuario } from '../../others/interfaces';
import { LoginComponent } from '../login/login.component';
//import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {

  // userData: Usuario = <Usuario> null;
  userToken:any ;
  isLogged: boolean;

  @Input('userData') userData: Usuario;

  constructor(private apiServide: ApiService, private router:Router) {   
    
    
  }

  ngOnInit() {
    this.userToken = localStorage.getItem('AYDPT');    
  }

  public salir() {

    localStorage.setItem('AYDPT', "");
    this.router.navigate(['']);   
  }
  
  public test() {
    if (localStorage['AYDPT']==="") this.isLogged = false;
    else if (localStorage['AYDPT']!=="") this.isLogged = true;
    console.log("Datos de usuario", this.userData);
   
  }

}
