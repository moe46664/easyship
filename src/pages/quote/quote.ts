import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {ExtrasPage} from "../extras/extras";
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  constructor(public navCtrl: NavController) {

  }

  addExtras(){
    this.navCtrl.push(ExtrasPage);
  }



}
