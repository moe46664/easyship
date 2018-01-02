import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {ExtrasPage} from "../extras/extras";
import {ConfirmationPage} from "../confirmation/confirmation";
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  showConfirmation() {
    let loader = this.loadingCtrl.create({
      content: "Confirming your payment through our secure gateway...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(ConfirmationPage);
  }


}
