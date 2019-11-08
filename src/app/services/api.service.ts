import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';
// import { Response } from "@angular/http";

import {Usuario} from '../others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly rootUrl = 'http://velneo.arysoft.es/aydp';
  readonly customUrl = 'http://velneo.arysoft.es/aydp';
  public reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS" });


  constructor(private http: HttpClient) { }

  public register(datos) {
    console.log("Registro: ", datos);
    return this.http.get(this.customUrl+'/REGISTRO?'+datos );
  }
  
  public login(datos): Observable<Usuario>  {
    
    // let usuario: Usuario = <Usuario> {this.http.get(this.customUrl+'/LOGINAJS?'+datos);}
    return this.http.get<Usuario>(this.customUrl+'/LOGINAJS?'+datos);

  }

  public getFamilias()  {
  return this.http.get(this.rootUrl+'/fam_m?filter%5Bes_modelo%5D=false&api_key=fam');
  }

  public getModelos()  {
  return this.http.get(this.rootUrl+'/fam_m?filter%5Bes_modelo%5D=true&api_key=fam');
  }

  public getModelosPorMarca(marca)  {
  return this.http.get(this.customUrl+'/VAPI_MODELO_POR_MARCA?MARCA='+marca );//, { headers: this.reqHeader }
  }

  public getArticuloFamiliaNum(FamNum)  {
  return this.http.get(this.rootUrl+'/art_m?filter%5Bfam%5D='+FamNum+'&api_key=art');
  }

  public getArticuloNum(artNum)  {
  return this.http.get(this.rootUrl+'/art_m/'+artNum+'?api_key=art');
  }

  public buscadorVehiculos(datos) {
    console.log("Busqueda ", datos);
    return this.http.get(this.customUrl+'/VAPI_BUSQUEDA?'+datos );
  }


}
