import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ReservationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation-form',
  templateUrl: 'reservation-form.html',
})
export class ReservationFormPage {
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationFormPage');
  }
  confirm() {
    let data = { name: this.name };
    this.viewCtrl.dismiss(data).then(val=>{
      console.log(val)
    });
  }

}
