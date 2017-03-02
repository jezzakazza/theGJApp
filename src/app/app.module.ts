import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { AboutUs } from '../pages/aboutus/aboutus';
import {Ginfo} from '../pages/aboutus/ginfo/ginfo'
import {Jinfo} from '../pages/aboutus/jinfo/jinfo'
import { Soundboard } from '../pages/soundboard/soundboard';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {Albums} from  '../pages/albums/albums';
import { Requests } from '../pages/requests/requests';
import { Quotes } from '../pages/quotes/quotes';
import { QuotesService } from '../pages/quotes/quotes.service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2c95ba1d'
  }
};


@NgModule({
  declarations: [
    MyApp,
    Home,
    AboutUs,
    Ginfo,
    Jinfo,
    Soundboard,
    Albums,
    Requests,
    Quotes
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    AboutUs,
    Ginfo,
    Jinfo,
    Soundboard,
    Albums,
    Requests,
    Quotes
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
    ]
})
export class AppModule {}
