import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { cadastro } from '../../models/cadastro';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { NovoClientePage } from '../novo-cliente/novo-cliente';
/**
 * Generated class for the CadastroClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-client',
  templateUrl: 'cadastro-client.html',
})
export class CadastroClientPage {

   CadastroCliente = {} as cadastro;
   cadastroClienteRefs$ : AngularFireList<any>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase,
    private toast : ToastController
  ) {
    this.cadastroClienteRefs$ = this.database.list('shopping-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientPage');
  }

  save(cadastroCliente : cadastro){
     
    let toast = this.toast.create({
      message: 'Adicionado com sucesso',
      duration: 3000
    });
    this.cadastroClienteRefs$.push({
      Vendedor : this.CadastroCliente.vendedor, 
      NomeFantasia : this.CadastroCliente.NomeFantasia, 
       RazaoSocial : this.CadastroCliente.razaoSocial,
       CNPJ : this.CadastroCliente.cpfecnpj,
        cep : this.CadastroCliente.cep,
        endereco : this.CadastroCliente.endereco,
        nr : this.CadastroCliente.nr,
        bairro : this.CadastroCliente.bairro,
        complemento : this.CadastroCliente.complemento,
        telefone : this.CadastroCliente.telefone,
        celular : this.CadastroCliente.celular,
        cidade : this.CadastroCliente.cidade,
        uf : this.CadastroCliente.celular
      }).then(()=>{
       toast.present();
       this.navCtrl.push(NovoClientePage);
    },(e)=>{
       alert('Erro ao cadastrar');
    });
   
  }

}
