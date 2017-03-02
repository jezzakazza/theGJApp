import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { AboutUs } from '../pages/aboutus/aboutus';
import { Soundboard } from '../pages/soundboard/soundboard';
import { Albums } from '../pages/albums/albums';
import { Requests } from '../pages/requests/requests';
import { Quotes } from '../pages/quotes/quotes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'About Us', component: AboutUs },
      { title: 'Soundboard', component: Soundboard },
      { title: 'Music', component: Albums },
      { title: 'Requests', component: Requests },
      { title: 'Quotes', component: Quotes }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
