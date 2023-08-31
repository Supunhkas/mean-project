import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { FormComponent } from './componets/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'register', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
