import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
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
  server = "http://localhost/"
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
        
      this.films = this.httpClient.get(this.server+'gesstor/App/Core/App.php?action=ContatoFuncionario&method=getAllJoin');
      this.films
      .subscribe(data => {
        
        this.contatos = data.result;
        console.log(this.contatos);

        })
      }

}
