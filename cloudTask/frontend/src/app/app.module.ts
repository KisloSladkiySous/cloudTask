import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CabinetModule } from './modules/cabinet/cabinet.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CabinetModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
