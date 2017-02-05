import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import '../rxjs-operators';

@Component({
  template: `
    <h4>Star Wars Characters</h4>
    <div *ngFor="let item of list$ | async">
      <a [routerLink]="item.id">{{item.name}}</a>
    </div>
  `
})
export class ListComponent implements OnInit {
  list$;

  constructor(private http: Http, @Inject('starWarsApiUrl') private apiUrl) { }

  ngOnInit() {
    this.list$ = this.http.get(`${this.apiUrl}/people`)
      .map(res => res.json());
  }
 }
