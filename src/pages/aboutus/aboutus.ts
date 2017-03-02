import { Component } from '@angular/core';
import {Ginfo} from './ginfo/ginfo';
import {Jinfo} from './jinfo/jinfo';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'aboutus-page',
  templateUrl: 'aboutus.html'
})
export class AboutUs {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = 
    [
      {title:"G from GJ", note: "More about G", icon:'football'},
      {title:"J from GJ", note: "More about J", icon:'beer'}
    ];

  }

  itemTapped(event, item) {
    if (item.title=="G from GJ") {
      this.navCtrl.push(Ginfo
    );
      this.playAudio("assets/G.mp3")
    }
    if (item.title == "J from GJ") {
      this.navCtrl.push(Jinfo
    );
    this.playAudio("assets/J.mp3")
    }
  }
  
 playAudio(audioSrc: string)
  {
    var audio = new Audio
    audio.src= audioSrc;
    audio.load();
    audio.play();
  }

}
