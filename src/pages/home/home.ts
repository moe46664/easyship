import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SendPage} from "../send/send";
import {ManagePage} from "../manage/manage";
import {ReferPage} from "../refer/refer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
npm
  constructor(public navCtrl: NavController) {

  }
  homePageRoot = HomePage;

  slides = [
    {
      title: "Hi Stratis.<br> Welcome to EasyShip!",
      description: "The <b>Easiest</b> way to send parcels, anywhere in the world.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "Delivery. Simplified.",
      description: "It takes only 30 seconds to get schedule your delivery",
      image: "assets/imgs/logo.png",
    },
    {
      title: "Best Rates. Guaranteed",
      description: "We work with a variety of partners to ensure you get the best rates, every time",
      image: "assets/imgs/logo.png",
    }
  ];

  sendPage(){
    this.navCtrl.push(SendPage);
  }

  managePage(){
    this.navCtrl.push(ManagePage);
  }

  referPage(){
    this.navCtrl.push(ReferPage);
  }

}
