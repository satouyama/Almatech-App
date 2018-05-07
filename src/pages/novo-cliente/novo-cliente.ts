import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CadastroClientPage } from '../cadastro-client/cadastro-client';
import { AngularFireDatabase } from 'angularfire2/database';
import { cadastro } from '../../models/cadastro';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NovoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {
  CadastroClienteRefs$ : Observable<cadastro[]>

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private database : AngularFireDatabase,
      private actionSheetCtrl : ActionSheetController
    ) {
        this.CadastroClienteRefs$ = this.database.list('shopping-list').valueChanges();
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoClientePage');
  }
  
  selecionarCadastro(CadastroClient : cadastro){
    // 1 . edit the shooping item
        this.actionSheetCtrl.create({
          title : `${CadastroClient.NomeFantasia}`,
          buttons : [
          
          {
              text : 'Editar',
              handler : ()=>{
          
              }
            }, {
              text : 'Excluir',
              role : 'destructive',
              handler : ()=>{
               this.CadastroClienteRefs$.remove()
              },
            },{
              text : 'Cancelar',
              role : 'cancel',
              handler : ()=>{
               console.log('client press cancel button');
              }
            }           
          ]
        }).present();

        //2 delete shopping item

  }
  
  CadastroClient(){
    this.navCtrl.push(CadastroClientPage);
  }


}
