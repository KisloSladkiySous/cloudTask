import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {cabinetRoutes} from '../app/modules/cabinet/cabinet.routes'

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "cabinet", children: [...cabinetRoutes],},
  { path: "**", redirectTo: "login" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
