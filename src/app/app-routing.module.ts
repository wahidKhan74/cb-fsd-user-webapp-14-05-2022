import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path:"" , redirectTo:"/home", pathMatch:"full"},
  { path:"home" , component:HomeComponent},
  { path:"register" , component:RegisterComponent},
  { path:"login" , component:LoginComponent},
  { path:"change-password" , component:ChangePasswordComponent},
  { path:"products" , children: [
    {path :"", component:ProductsComponent},
  ]},
  { path:"**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
