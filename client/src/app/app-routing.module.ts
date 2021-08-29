import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateComponent } from './update/update.component';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { AddcommentComponent } from './addcomment/addcomment.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'explore', component: ExploreComponent},
  {path:'advertisement/:id', component: AdvertisementDetailComponent},
  {path:'create', component: CreateComponent, canActivate: [AuthGuard]},
  {path:'userprofile', component: UserprofileComponent, canActivate: [AuthGuard]},
  {path:'update/:id', component: UpdateComponent, canActivate: [AuthGuard]},
  {path:'addcomment/:id', component: AddcommentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling:'enabled',
    onSameUrlNavigation:'reload',
    scrollPositionRestoration:'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
