import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';
import {QuotePage} from "../quote/quote";


@Component({
  selector: 'page-send',
  templateUrl: 'send.html'
})
export class SendPage {

  constructor(public navCtrl: NavController, private camera : Camera, public loadingCtrl: LoadingController) {

  }

  public base64CameraImage: string;
  smallImage:string='assets/imgs/smallbox.jpg';
  mediumImage:string='assets/imgs/mediumbox.jpg';
  largeImage:string='assets/imgs/largebox.jpeg';



  getQuote() {
    let loader = this.loadingCtrl.create({
      content: "Finding you the best prices from our partners",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(QuotePage);
  }

  takePhoto(){
    this.camera.getPicture().then((imageData) => {
      this.base64CameraImage = imageData
    }, (err) => {
    });
  }



}
