import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// coponents
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
 

const routes : Routes  = [
  { path : 'login' , component : LoginComponent },
  { path : 'registration', component : RegistrationComponent },
  { path : '' , component : HomeComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'curriculum-vitae' , component : CurriculumVitaeComponent },
  { path : 'blog' , component : BlogComponent },  
  { path : '**' , component : NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
