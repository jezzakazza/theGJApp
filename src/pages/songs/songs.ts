import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'songs-page',
  templateUrl: 'songs.html'
  
})
export class Songs {

  constructor(public navCtrl: NavController) {
    
  }

  itemTapped(event, item) {
    if (item =="groupStudyArea") {
      this.navCtrl.push(Songs
    );
    }
    if (item == "silentStudyArea") {
      this.navCtrl.push(Songs
    );
    }
  }

}
