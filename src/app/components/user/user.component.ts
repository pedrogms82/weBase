import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], 
  providers:[ApiService]
})
export class UserComponent implements OnInit {

  public token: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.token = localStorage.getItem('AYDPT');
    console.log("TOKEN", this.token);
    
  }

  
  
}
