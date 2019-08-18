import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from "ionic-angular";

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  isLoading = false;

  constructor(public loadingController: LoadingController,
              private alertCtrl:AlertController,) { }

   presentLoading() {
    let loading = this.loadingController.create({
      content: 'Please wait...'
    });
    return loading;
  }





  async presentAlert(title) {
    const alert = await this.alertCtrl.create({
      title: title,
      subTitle: '10% of battery remaining',
      buttons: ['Ok'],
      enableBackdropDismiss:true
    });
    await alert.present();
  }

}
