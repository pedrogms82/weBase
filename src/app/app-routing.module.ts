import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'login', component: LoginComponent }
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
