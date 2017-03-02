import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
    
  }

  private playAudio()
  {
    var audio = new Audio
    audio.src = "assets/gj.mp3"
    audio.load();
    audio.play();
  }

}
