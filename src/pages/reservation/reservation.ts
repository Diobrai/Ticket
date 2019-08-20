import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GeneralProvider} from "../../providers/general/general";
import {Gare} from "../../Data/Gare";
import {Company} from "../../Data/company";
import {ReservationsList} from "../../Data/reservationsList";

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  companies;
  company:any;
  gare:Gare;
  compa:Company;
  gares=[];
  garesCompagny;
  date: any;
  arrive:any;
  depart:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private generalProvider: GeneralProvider,

              ) {
    this.gare=new Gare();
    this.compa=new Company();
    this.companies=this.compa.AllCompany();
    this.gares=this.gare.AllGare();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  GetGare() {
    this.garesCompagny=this.gares.filter(value =>value.company==this.company);
    //this.generalProvider.presentAlert(this.company)
  }

  GotToReservationList() {
    if(this.date&& this.depart&&this.arrive&&this.company){
      const loading=this.generalProvider.presentLoading();
      loading.present();
      let params={
        date:this.date,
        company:this.company,
        depart:this.depart,
        arrive:this.arrive
      };
      setTimeout(()=>{
        loading.dismiss();
        this.navCtrl.push('ReservationListPage',params);
      },3000)
    }else {
      this.generalProvider.presentAlert('Tous les champs sont obligatoire')
    }




  }

  GetBillet() {
   let data=localStorage.getItem('billet');
   if(data){
     let dataT=data.split('-');
     console.log(dataT);
     const reservationList=new ReservationsList();
     let reservation=reservationList.GetReservation(dataT[0],dataT[1],dataT[2]);
     this.navCtrl.push('BilletsPage',{reservation:reservation},{},(data)=>{
       console.log(data)
     })
   }else {
        return;
   }


  }
}
