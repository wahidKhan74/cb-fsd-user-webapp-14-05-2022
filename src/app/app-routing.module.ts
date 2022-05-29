import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';

const routes: Routes = [
  { path:"" , redirectTo:"/products", pathMatch:"full"},
  { path:"home" , component:HomeComponent},
  { path:"register" , component:RegisterComponent},
  { path:"login" , component:LoginComponent},
  { path:"user-profile" , component:UserProfileComponent},
  { path:"shopping-cart" , component:ShoppingCartComponent},
  { path:"whishlist" , component:WhishlistComponent},
  { path:"checkout" , component:CheckoutComponent},
  { path:"orders" , component:OrdersComponent},
  { path:"change-password" , component:ChangePasswordComponent},
  { path:"products" , children: [
    {path :"", component:ProductsComponent}
  ]},
  { path:"**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
