import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the TakeUpARolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 const config = {
  apiKey: "AIzaSyAqsMU9JXMziQ-En7vrbNRqr5y_6J6fZ5A",
  authDomain: "nitktoastmasters-da7c7.firebaseapp.com",
  databaseURL: "https://nitktoastmasters-da7c7.firebaseio.com",
  projectId: "nitktoastmasters-da7c7",
  storageBucket: "nitktoastmasters-da7c7.appspot.com",
  messagingSenderId: "336393535782"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

@IonicPage()
@Component({
  selector: 'page-take-up-a-role',
  templateUrl: 'take-up-a-role.html',
})
export class TakeUpARolePage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = firebase.auth().currentUser;
  	// if (this.user){
  	// 	alert("Valid");
  	// }
  	// else{
  	// 	alert("Please login from the settings page.")
  	// }
  }
}
