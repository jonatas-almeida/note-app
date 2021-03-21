import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditPageRoutingModule } from './modal-edit-routing.module';

import { ModalEditPage } from './modal-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalEditPage]
})
export class ModalEditPageModule {}
