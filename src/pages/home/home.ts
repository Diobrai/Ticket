import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserData} from "../../Data/userData";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userData:UserData;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
    this.userData=new UserData();
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
      message: "Entrez vos informations",
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
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
            let user=data;
            if(user.username.length>0){
              const confirmCompany=this.alertCtrl.create({
                title: 'Bienvenue '+user.username,
                message: "confirmer votre company et votre Gare",
                inputs:[
                  {
                    name: 'company',
                    placeholder: 'company'
                  },
                  {
                    name: 'gare',
                    placeholder: 'gare',
                  },

                ],
                buttons:[
                  {
                    text: 'Cancel',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'Save',
                    handler:data=>{
                      let username=user.username;
                      let gare=data.gare;
                      let user1=this.userData.getUserByUsernameAndGare(username,gare);
                        if(user1.length>0){
                          console.log(user1);
                            const toast = this.toastCtrl.create({
                              message: 'Authentification  en cour',
                              duration: 3000,
                              position:'top'
                            });
                            toast.present().then(data=>{
                              console.log('')
                            });
                            toast.onDidDismiss((data)=>{
                              this.navCtrl.setRoot('ProfilePage')
                            })


                        }else{

                        }

                    }
                  }]
              });
              confirmCompany.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
