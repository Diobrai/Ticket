import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ReservationFormPage} from "../reservation-form/reservation-form";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  pres(){
    let profileModal = this.modalCtrl.create('ReservationFormPage', {},
      {
        cssClass:'mymodal',
      });
    profileModal.present();
  }
}
