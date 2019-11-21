import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../others/interfaces';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})

export class PortadaComponent implements OnInit {

  public userData: Usuario = { Token: null, Nombre: null, Apellidos: null, Email: null, Empresa: null} as Usuario;

  @Output() logeoOutput = new EventEmitter();
  @Output() testOutput = new EventEmitter();

  constructor(

    ) { }

  ngOnInit() {
  }

  public test() {
      // console.log('entro en test');
      this.testOutput.emit('Emito evento');
  }
}

