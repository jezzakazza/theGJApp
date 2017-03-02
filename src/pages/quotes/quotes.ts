import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { NavController } from 'ionic-angular';
import {QuotesService} from './quotes.service';
import { IQuotes } from './quotes.model';

@Component({
  selector: 'quotes-page',
  templateUrl: 'quotes.html'
})
export class Quotes implements OnInit {

  constructor(public navCtrl: NavController, private service: QuotesService) {
    
  }

  private quoteArray: IQuotes;
  areQuotesGenerated: boolean = false;
  ngOnInit() {
    this.getQuotes()
    this.areQuotesGenerated= false
  }
  getQuotes() {
    var randomNumber = Math.floor(Math.random() * (38))
    this.service.getQuote().subscribe(quotes => this.quoteArray = quotes
    .filter(x => x.id == randomNumber )[0])
    this.areQuotesGenerated = true;
    console.log(this.quoteArray)
  }


}
