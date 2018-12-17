import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NextMeetingPage } from '../pages/nextmeeting/nextmeeting';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { TakeUpARolePage } from '../pages/take-up-a-role/take-up-a-role';
import { VotingPage } from '../pages/voting/voting';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextMeetingPage,
    ContactInfoPage,
    TakeUpARolePage,
    VotingPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextMeetingPage,
    ContactInfoPage,
    TakeUpARolePage,
    VotingPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
