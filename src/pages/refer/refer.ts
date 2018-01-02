import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-refer',
  templateUrl: 'refer.html'
})
export class ReferPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Awesome Sauce!',
      subTitle: 'Your account has just been credited with R25! Refer more friends and earn more Moola',
      buttons: ['OK']
    });
    alert.present();
  }
}
