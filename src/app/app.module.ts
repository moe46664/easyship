import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {SendPage} from '../pages/send/send';
import { ManagePage} from '../pages/manage/manage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {SettingsPage} from "../pages/settings/settings";
import {QuotePage} from "../pages/quote/quote";
import {ExtrasPage} from "../pages/extras/extras";
import {PaymentPage} from "../pages/payment/payment";
import {ConfirmationPage} from "../pages/confirmation/confirmation";
import {ReferPage} from "../pages/refer/refer";

@NgModule({
  declarations: [
    MyApp,
    SendPage,
    ManagePage,
    HomePage,
    TabsPage,
    SettingsPage,
    QuotePage,
    ExtrasPage,
    PaymentPage,
    ConfirmationPage,
    ReferPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SendPage,
    ManagePage,
    HomePage,
    TabsPage,
    SettingsPage,
    QuotePage,
    ExtrasPage,
    PaymentPage,
    ConfirmationPage,
    ReferPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
