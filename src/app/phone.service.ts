import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Phone } from './phones/phone';
import { results } from './results';

@Injectable()
export class PhoneService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  private phonesUrl = 'http://localhost:4000/api/phones';  // URL to web api

  constructor(private http: Http) { }

  getPhones(): Promise<Phone[]> {
    return this.http.get(this.phonesUrl)
      .toPromise()
      .then(response => response.json().data as Phone[])
      .catch(this.handleError)
    // return Promise.resolve(results)
  }
  getPhone(id: number): Promise<Phone> {
    // return Promise.resolve(results[0])
    const url = `${this.phonesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Phone)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}