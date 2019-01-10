import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { AusenciaPage } from '../ausencia/ausencia';
import { ContatosPage } from '../contatos/contatos';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  sigla: String
  constructor(public navCtrl: NavController, public platform: Platform, public storage: Storage) {

    this.navCtrl.push(AusenciaPage);
  }


  fechar() {
    this.platform.exitApp();
  }

  ausencia() {

    this.navCtrl.push(AusenciaPage);
  }

  contatos() {

    this.navCtrl.push(ContatosPage);
  }
  ionViewWillEnter() {
    this.storage.get('sigla').then((val) => {
      this.sigla = val;
    });
  }

}
