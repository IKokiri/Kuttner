import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { AusenciaPage } from '../pages/ausencia/ausencia';
import { ContatosPage } from '../pages/contatos/contatos';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { EntradaPage } from '../pages/entrada/entrada';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    AusenciaPage,
    ContatosPage,
    EntradaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    AusenciaPage,
    ContatosPage,
    EntradaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
