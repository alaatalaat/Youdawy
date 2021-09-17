import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForDocsSliderComponent } from './first-nav-links/for-docs-slider/for-docs-slider.component';
import { ForDocsComponent } from './first-nav-links/for-docs/for-docs.component';
import { ForInsurersSliderComponent } from './first-nav-links/for-insurers-slider/for-insurers-slider.component';
import { ForInsurersComponent } from './first-nav-links/for-insurers/for-insurers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BuyNowComponent } from './products/buy-now/buy-now.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PharmaciesComponent } from './first-nav-links/pharmacies/pharmacies.component';
import { AboutYodawyComponent } from './first-nav-links/about-yodawy/about-yodawy.component';
import { BathAmenitiesComponent } from './bath-amenities/bath-amenities.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'for-docs', component: ForDocsComponent },
  { path: 'for-docs-slider', component: ForDocsSliderComponent },
  { path: 'for-insures', component: ForInsurersComponent },
  { path: 'for-insures-slider', component: ForInsurersSliderComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'shop', component: ProductListComponent },
  { path: 'bath', component: BathAmenitiesComponent },
  /*{
    path: 'product-details/:name/:description/:size/:releaseDate/:form',
    component: ProductDetailsComponent,
  },*/
  { path: 'buynow', component: BuyNowComponent },
  { path: 'pharmacies', component: PharmaciesComponent },
  { path: 'about-us', component: AboutYodawyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
