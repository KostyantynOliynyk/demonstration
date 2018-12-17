import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// component 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { AddNewPostFormComponent } from './components/add-new-post-form/add-new-post-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BgDirective } from './directives/bg.directive';
// modules
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';





 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CurriculumVitaeComponent,
    NotFoundComponent,
    BlogComponent,
    PostItemComponent,
    AddNewPostFormComponent,
    LoginComponent,
    RegistrationComponent,
    BgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
