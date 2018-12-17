import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

// LoadingController to display a loading screen while the data is fetched.

// To connect to the Firebase application:
const config = {
  apiKey: "AIzaSyAqsMU9JXMziQ-En7vrbNRqr5y_6J6fZ5A",
  authDomain: "nitktoastmasters-da7c7.firebaseapp.com",
  databaseURL: "https://nitktoastmasters-da7c7.firebaseio.com",
  projectId: "nitktoastmasters-da7c7",
  storageBucket: "nitktoastmasters-da7c7.appspot.com",
  messagingSenderId: "336393535782"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// To display the Page.

@Component({
  selector: 'page-nextmeeting',
  templateUrl: 'nextmeeting.html'
})

export class NextMeetingPage {

  selectedItem: any;
  items: Array<{title: string, note: string, description: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    
    this.selectedItem = navParams.get('item');
    this.items = [];
    var class_items = this.getItems();
    var onCreate = 0;

    var ref = firebase.database().ref().child("Roles");
    ref.on("value", function(snapshot){

      if (onCreate==1){
        class_items.length = 0;
        alert("Next Meeting Details updated!");
      }

      onCreate=1;

      var values = snapshot.val();
      var sorted_values = [];
      
      for(var key in values) {
        if (values.hasOwnProperty(key)){
          sorted_values.push([key,values[key]]);
        } 
      }
    
      sorted_values.sort(function(a, b) {
        return parseFloat(a[1].order) - parseFloat(b[1].order);
      });

      for(var x in sorted_values) {
        var role_title = sorted_values[x][0];
        var role_name = "Testing";
        var role_description = "Default description"

        if (sorted_values[x][1]["Name"]!=undefined)
          role_name = sorted_values[x][1]["Name"];
        else
          role_name = sorted_values[x][1]["Speaker"] + " : " + sorted_values[x][1]["Project"] + " : " + sorted_values[x][1]["Evaluator"];

        if (sorted_values[x][1]["description"]!=undefined)
          role_description = sorted_values[x][1]["description"];

        class_items.push({
          title: role_title,
          note: role_name,
          description: role_description
        });
      }
    });

    if(onCreate==0){
      let lr = this.loadingCtrl.create({
        content: 'Fetching meeting details...',
      });

      lr.present().then(() => {
        setTimeout(() => {
          lr.dismiss();
        }, 1500);
        
      });
    }

  }

  getItems(){
    return this.items;
  }

  itemTapped(event, item) {

    let alert = this.alertCtrl.create({
      title: item.title,
      subTitle: item.description,
      buttons: ['Ok']
    });
    alert.present();

    // alert(item.description);
  };
}

