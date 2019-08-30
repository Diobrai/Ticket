import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BilletsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billets',
  templateUrl: 'billets.html',
})
export class BilletsPage {
  billet:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let bill=localStorage.getItem('billet');
    if(bill){
      this.billet=bill.split('-');
    }
  }

  Modifier() {
    this.navCtrl.pop();
  }

  Supprimer() {
    localStorage.removeItem('billet');
    this.billet=[]

  }
}
