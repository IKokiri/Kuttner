import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContatosPage } from '../contatos/contatos';
import { Storage } from '@ionic/storage';
import { UnknowwappPage } from '../unknowwapp/unknowwapp';

/**
 * Generated class for the AusenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ausencia',
  templateUrl: 'ausencia.html',
})
export class AusenciaPage {
  sigla: String
  films: any
  ausentes: any
  server = "http://localhost/"


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public platform: Platform, public storage: Storage) {

    this.films = this.httpClient.get(this.server + 'gesstor/App/Core/App.php?action=Ausencia&method=getAllOrderApp');
    this.films
      .subscribe(data => {

        this.ausentes = data.result;


      })
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

