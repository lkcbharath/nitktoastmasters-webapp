import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the VotingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-voting',
  templateUrl: 'voting.html',
})
export class VotingPage {

  selectedItem: any;
  name: any;
  items: Array<{link: string, description: string, order: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedItem = navParams.get('item');
    this.items = [];

    this.items.push({
    	link: "https://docs.google.com/forms/d/e/1FAIpQLSfrJ2UXE_Lq8dvJ6XvEoccaOl4d0x26xE1My_eppQRlwFGERw/viewform?usp=pp_url&entry.458003154=",
    	description: "Vote for the best Speaker",
    	order: "1"
    });

    this.items.push({
    	link: "https://docs.google.com/forms/d/e/1FAIpQLScDsyU62JCduvVP1Ou2lSmvFPbec8__pCSpbucN3UYps-BuPQ/viewform?usp=pp_url&entry.1898842101=",
    	description: "Vote for the best Table Topic Speaker",
    	order: "2"
    });

    this.items.push({
    	link: "https://docs.google.com/forms/d/e/1FAIpQLSehimZvX1tRb-_67xVXRShoSC9S78nJuFq4NsOLUYQB2_JvYw/viewform?usp=pp_url&entry.1682423468=",
    	description: "Vote for the best Evaluator",
    	order: "3"
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotingPage');
  }

  itemTapped(event, item) {
    let browser = new InAppBrowser();
    var link = item.link + this.name;
    browser.create(link);
  };

}
