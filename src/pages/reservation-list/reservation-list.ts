import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Ligne} from "../../Data/ligne";

/**
 * Generated class for the ReservationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation-list',
  templateUrl: 'reservation-list.html',
})
export class ReservationListPage {
  company:string;
  date:string;
  depart:string;
  arrive:string;
  ligne:Ligne;
  companyLines=[];
  dateTransform:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController
              ) {
    this.company=this.navParams.get('company');
    this.date= this.navParams.get('date');
    this.depart=this.navParams.get('depart');
    this.arrive=this.navParams.get('arrive');
    this.ligne=new Ligne();
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    // date1=this.date.getDay()+'/'+this.date.getMonth()+'/'+this.date.getFullYear();
    let date1=this.date.split('-');
    let date2=date1[2]+'/'+date1[1]+'/'+date1[0];
    this.dateTransform=date2;
    console.log(date2);
    this.companyLines=this.ligne.GetLigneByCompany(this.company,date2);
    console.log(this.companyLines)
  }

  GoToReservationForm(line: any) {
    let profileModal = this.modalCtrl.create('ReservationFormPage', {},
      {
        cssClass:'mymodal',
      });
    profileModal.onDidDismiss(data=>{
      console.log(data)
    })
    profileModal.present();

  }
}
