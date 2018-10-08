import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaymentSetupComponent } from './payment-setup/payment-setup.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PaymentSetupComponent,
    UserComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'sign-up', component: SignUpComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      //the wildcard route should ideally redirect to a 404 not found page (seperate component)
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
