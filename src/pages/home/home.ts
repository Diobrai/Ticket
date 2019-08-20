import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController) {
  }


  GoToReservePage() {
    this.navCtrl.push('ReservationPage');
  }

  GoToLoginPage() {
    this.navCtrl.setRoot('LoginPage');
  }

  GoToRegisterPage() {
    this.navCtrl.setRoot('RegisterPage');
  }
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Title'
        },
        {
          name: 'password',
          placeholder: 'password',
          type:'password',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
