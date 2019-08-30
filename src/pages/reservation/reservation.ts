import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
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
  garesCompagnydetpart: any;
  garesCompagnyarrive: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private generalProvider: GeneralProvider,
              private alterCtrl:AlertController

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
    //const ascending: any= values.sort((a,b) =>  (a > b ? 1 : -1));
    //const descending: any= values.sort((a,b) => (a > b ? -1 : 1))
    this.garesCompagny=this.gares.filter(value =>value.company==this.company).
    sort((a,b) => (a.name > b.name ? 1 : -1));
    this.garesCompagnyarrive=this.garesCompagny;
    this.garesCompagnydetpart=this.garesCompagny;
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
      this.alterCtrl.create({
        title:'Info',
        message:'Tous les champs sont obligatoire!!'
      }).present()
    }




  }

  GetBillet() {
   let data=localStorage.getItem('billet');
   console.log(data)
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

  GetGareWithout(gare: any,depOrarr:string) {
    if(depOrarr=='depart'){
      this.garesCompagnyarrive=this.garesCompagny;
     this.garesCompagnyarrive= this.garesCompagnyarrive.filter(value =>value.name!=gare)
    }else{
      this.garesCompagnydetpart= this.garesCompagnydetpart.filter(value =>value.name!=gare);
      this.garesCompagnydetpart=this.garesCompagny;
    }
  }
}
