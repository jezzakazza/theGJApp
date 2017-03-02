import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'albums-page',
  templateUrl: 'albums.html'
  
})
export class Albums {

  constructor(public navCtrl: NavController) {
    
  }

itemTapped(event, item: string) {
    if (item =="groupStudyArea") {
      this.navCtrl.push(Albums
    );
    console.log("GSA")
    }
    if (item == "silentStudyArea") {
      this.navCtrl.push(Albums
    );
    console.log("SSA")
    }
  }

}
