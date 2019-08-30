
export class Ligne {
       company:string;
       date:string;
       prix:number;
       arrive:string;
       depart:string;
       heure:string;
       allLigne=[];
       constructor(){
         this.allLigne=[
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Mopti',
             company:'Bani Transport'
           },
           {
             date:'18/08/2019',
             heure:'20h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Sikasso',
             company:'Bani Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:6000,
             arrive:'Sikasso',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'08h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'13h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'14h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'16h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'17h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'18h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'20h30',
             prix:5000,
             arrive:'Koutiala',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:4000,
             arrive:'Segou',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'8h30',
             prix:7000,
             arrive:'Kayes',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'8h30',
             prix:5000,
             arrive:'Niono',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Mopti',
             company:'Diarra Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'segou',
             company:'Pedro Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Koutiala',
             company:'Pedro Transport'
           },



         ]
       }

       GetLigneByCompany(name,date,depart,arriver){
         return this.allLigne.filter((val)=>
         val.company==name && val.date==date && val.depart==depart && val.arrive==arriver)
       }



}
