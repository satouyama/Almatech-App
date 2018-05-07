import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NovoClientePage } from '../pages/novo-cliente/novo-cliente';
import { CadastroClientPage } from '../pages/cadastro-client/cadastro-client';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

 const credentials = {
  apiKey: "AIzaSyBw_cdfZqdMGqsi4D8fyl2u9czGw_E9bac",
  authDomain: "chat-e9788.firebaseapp.com",
  databaseURL: "https://chat-e9788.firebaseio.com",
  projectId: "chat-e9788",
  storageBucket: "chat-e9788.appspot.com",
  messagingSenderId: "648182417051"
 }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    NovoClientePage,
    CadastroClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(credentials),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    NovoClientePage,
    CadastroClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
