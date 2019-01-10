import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export class EntradaPage {
  sigla: String
  name: any
  storage: Storage
  email: any
  senha: any
  login: any
  dadosUsuario: any

  server = "http://localhost/"

  constructor(public navCtrl: NavController, storage: Storage, public httpClient: HttpClient) {

    this.storage = storage


  }

  ionViewWillEnter() {

    this.storage.get('email').then((val) => {
      this.email = val;

      this.storage.get('senha').then((val) => {
        this.senha = val;
        this.login = this.httpClient.get(this.server + 'gesstor/App/Core/App.php?action=Login&method=login&email=' + this.email + '&senha=' + this.senha);
        this.login
          .subscribe(data => {
            this.dadosUsuario = data;
            if (this.dadosUsuario.count) {
              this.navCtrl.push(InicioPage);
              this.storage.set('sigla', this.dadosUsuario.result.sigla);
            }
          })
      });
    });
  }

  entrar() {

    this.storage.set('email', this.email);
    this.storage.set('senha', this.senha);

    this.login = this.httpClient.get(this.server + 'gesstor/App/Core/App.php?action=Login&method=login&email=' + this.email + '&senha=' + this.senha);
    this.login
      .subscribe(data => {
        this.dadosUsuario = data;
        if (this.dadosUsuario.count) {
          this.storage.set('sigla', this.dadosUsuario.result.sigla);
          this.navCtrl.push(InicioPage);

        }
      })

  }


}
