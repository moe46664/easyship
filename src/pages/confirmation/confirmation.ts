import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
import {ReferPage} from "../refer/refer";
import {SendPage} from "../send/send";
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {
  constructor(public navCtrl: NavController) {

  }




  sendAnotherParcel(){
    this.navCtrl.push(SendPage);
  }
  referPage(){
    this.navCtrl.push(ReferPage);
  }



}
