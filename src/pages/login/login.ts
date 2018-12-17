import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
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
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;
  invalid: any;
  email: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser;
    this.user ? this.invalid = undefined : this.invalid = 1;

    if (this.user){
      console.log("yes");
    }
  }

  onLoginClick(event) {

  	if(this.email!=undefined && this.password!=undefined){
  		firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
  			alert("Email or password incorrect.");
		  });
      var currentUser = firebase.auth().currentUser;
      if (currentUser){
        alert("Signed In!");
        location.reload();
      }
  	}
  	else {
  		alert("Please fill in both details.");
  	}
  };


  onClick(event) {
  	// var user = firebase.auth().currentUser;
  	if (this.user) {
  	  alert("Signed In.");
  	} else {
  	  alert("Not Signed In.");
  	}
  };

  onForgotPasswordClick(event) {
  	if(this.email!=undefined){
  	  firebase.auth().sendPasswordResetEmail(this.email).then(function() {
    		alert("A recovery email has been sent to your email address.");
  	  }).catch(function(error) {
    		alert("An error has occurred. Check whether the email you entered is valid.");
  	  });
  	}
  	else {
  		alert("Enter an email address.");
  	}
  };

  onLogoutClick(event){
    if(this.user){
      firebase.auth().signOut().then(function() {
        alert("Signed Out!");
        location.reload();
      }, function(error) {
        alert("An error has occurred. Are you already signed out?");
      });
    }
  };	
}
