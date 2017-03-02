import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'


@Injectable()
export class QuotesService {
    private url = 'assets/quotes.JSON';
    
    constructor(private http: Http) {}

    getQuote() {
        return this.http.get(this.url)
        .map((response:Response) => response.json())
    }
}

