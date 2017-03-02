import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'soundboard-page',
  templateUrl: 'soundboard.html'
  
})
export class Soundboard {

  constructor(public navCtrl: NavController) {
    
  }

  private playAudio(audioSrc: string)
  {
    var audio = new Audio
    audio.src = audioSrc;
    audio.load();
    audio.pause();
    audio.play();
  }

}
