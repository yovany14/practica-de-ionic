import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../componets/header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[HeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
