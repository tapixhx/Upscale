import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AuthService } from './services/auth.service';
import { ServerService } from './services/server.service';
import { AuthGuard } from './guard/auth.guard';
import { ExploreComponent } from './explore/explore.component';
import { CreateComponent } from './create/create.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateComponent } from './update/update.component';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { AddcommentComponent } from './addcomment/addcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent,
    CreateComponent,
    UserprofileComponent,
    UpdateComponent,
    AdvertisementDetailComponent,
    AddcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ServerService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
