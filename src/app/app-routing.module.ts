import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailBlogComponent } from './pages/detail-blog/detail-blog.component';

import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';

import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blog', component:BlogComponent},
   {path: 'detail/:id', component: DetailsComponent},
  {path: 'blog-detail', component:DetailBlogComponent},
  { path: 'shop', component: ShopComponent },
  {path: 'cart', component:CartComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
