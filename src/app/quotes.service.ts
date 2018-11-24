import { Injectable } from '@angular/core';
import { quotes } from './services/mock-quotes';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  getRandom () {
    return quotes[Math.floor((Math.random()) * quotes.length)];
  }
  constructor() { }
}
