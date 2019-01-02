import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AusenciaPage } from '../ausencia/ausencia';
/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {

  films: any
  contatos: any
  keys: any
  server = "http://localhost/"

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public platform: Platform) {

    this.films = this.httpClient.get(this.server + 'gesstor/App/Core/App.php?action=ContatoFuncionario&method=getAllJoinApp');
    this.films
      .subscribe(data => {

        this.contatos = data['result'];
        this.keys = Object.keys(data['result']);
        console.log(this.contatos);

      })
  }

  fechar() {
    this.platform.exitApp();
  }

  ausencia() {

    this.navCtrl.push(AusenciaPage);
  }

  contatosP() {

    this.navCtrl.push(ContatosPage);
  }

}
