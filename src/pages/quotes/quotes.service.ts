import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, ResponseContentType, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import { IQuotes } from './quotes.model';
import 'rxjs';

@Injectable()
export class QuotesService {
    private url = 'assets/quotes.JSON';
    
    constructor(private http: Http) {}

    getQuote(): Observable<IQuotes[]> {
       return this.http.get(this.url)
        .map(response => <IQuotes[]>response.json())

    }
}

