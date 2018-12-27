import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent }   from './home-page/home-page.component';
import { ServicesPageComponent }   from './services-page/services-page.component';
import { OurWorkPageComponent }   from './our-work-page/our-work-page.component';
import { AboutUsPageComponent }   from './about-us-page/about-us-page.component';
import { ContactPageComponent }   from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'ourwork', component: OurWorkPageComponent },
  { path: 'aboutus', component: AboutUsPageComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
