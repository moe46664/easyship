import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
@Component({
  selector: 'page-extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {
  constructor(public navCtrl: NavController) {

  }




  goToPayment(){
    this.navCtrl.push(PaymentPage);
  }



}
