import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntradaPage } from '../entrada/entrada';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  storage: Storage
  email: any
  senha: any
  login: any
  dadosUsuario: any
  server = "http://201.49.127.157:9003/"

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
            } else {
              this.navCtrl.push(EntradaPage);
            }
          })
      });
    });
  }
}
