import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'albums-page',
  templateUrl: 'albums.html'
  
})
export class Albums {

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
