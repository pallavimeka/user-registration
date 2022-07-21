import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [

{path:'',component:RegisterComponent},
{path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
{path:'**',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
