import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilletsPage } from './billets';

@NgModule({
  declarations: [
    BilletsPage,
  ],
  imports: [
    IonicPageModule.forChild(BilletsPage),
  ],
})
export class BilletsPageModule {}
