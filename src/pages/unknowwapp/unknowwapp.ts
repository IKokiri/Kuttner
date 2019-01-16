import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ContatosPage } from '../contatos/contatos';
import { AusenciaPage } from '../ausencia/ausencia';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the UnknowwappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unknowwapp',
  templateUrl: 'unknowwapp.html',
})
export class UnknowwappPage {
  @ViewChild('telefone') telefone;
  numero: String = ""
  sigla: String

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnknowwappPage');
  }

  add(numero: String) {
    this.numero = this.numero + "" + numero;
  }

  clear() {
    this.numero = '';
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

  unknowwapp() {

    this.navCtrl.push(UnknowwappPage);
  }


  ionViewWillEnter() {
    this.storage.get('sigla').then((val) => {
      this.sigla = val;
    });


  }

}
