import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalConfirmPageRoutingModule } from './modal-confirm-routing.module';

import { ModalConfirmPage } from './modal-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalConfirmPageRoutingModule
  ],
  declarations: [ModalConfirmPage]
})
export class ModalConfirmPageModule {}
