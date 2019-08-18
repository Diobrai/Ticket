import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationFormPage } from './reservation-form';

@NgModule({
  declarations: [
    ReservationFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationFormPage),
  ],
})
export class ReservationFormPageModule {}
