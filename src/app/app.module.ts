import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { LoginComponent } from './login/login.component';
import {
  
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioFormsModule, AmexioLayoutModule, AmexioWidgetModule
} from "amexio-ng-extensions";

@NgModule({
  declarations: [
    AppComponent,
    CaptchaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioFormsModule,AmexioLayoutModule, AmexioWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
