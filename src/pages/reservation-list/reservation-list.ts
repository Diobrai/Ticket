import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Ligne} from "../../Data/ligne";
import {GeneralProvider} from "../../providers/general/general";
import {Reservations} from "../../Data/reservations";
import {ReservationsList} from "../../Data/reservationsList";

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
  namePeaople:any;
  reservations:Reservations[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController,
              private generalProvider: GeneralProvider
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
      if(data){
        this.namePeaople=data.name;
        let reservation=new Reservations(line,this.namePeaople,2,this.company,this.dateTransform);
        let lists=new ReservationsList();
        lists.AddReservation(reservation);
        localStorage.setItem('billet',reservation.line.company+'-'+reservation.place+'-'+reservation.line.date);
        this.generalProvider.presentAlert('Success',
          'place'+reservation.place+'&compagnie:'+this.company)
      }
    });
    profileModal.present();

  }
}
