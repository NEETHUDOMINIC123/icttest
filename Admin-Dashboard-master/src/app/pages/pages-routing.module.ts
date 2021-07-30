import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UsersComponent } from './users/users.component';
import { TestimonialformComponent } from './testimonialform/testimonialform.component';
import { EdittestimonialComponent } from './edittestimonial/edittestimonial.component';
import { TestService } from './test.service';
import { DeletetestimonialComponent } from './deletetestimonial/deletetestimonial.component';
import { ViewtestimonialComponent } from './viewtestimonial/viewtestimonial.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  
   
    {
      path: 'testimonials',
      component:TestimonialsComponent,
    },
    {
      path: 'addtestimonial',
      component:TestimonialformComponent,
    },
    {
      path: 'edittestimonial',
      component:EdittestimonialComponent,
    },
    {
      path: 'deletetestimonial',
      component:DeletetestimonialComponent,
    },
    
    {
      path: 'viewtestimonial',
      component:ViewtestimonialComponent,
    },
    

    {
      path: 'users',
      component: UsersComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}