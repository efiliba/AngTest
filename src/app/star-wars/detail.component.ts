import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import '../rxjs-operators';

@Component({
  template: `
    <h1>Detail</h1>
    <h2>{{(detail$ | async).name}}</h2>
    <img [src]="(detail$ | async).image"/>
  `
})
export class DetailComponent implements OnInit {
  detail$ = new BehaviorSubject({name: 'Loading...', image: ''});

  constructor(private route: ActivatedRoute, private http: Http, @Inject('starWarsApiUrl') private apiUrl) { }

  ngOnInit() {
    this.route.params
      .map((p:any) => p.id)
      .switchMap(id => this.http.get(`${this.apiUrl}/people/${id}`)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, {image: `${this.apiUrl}/${contact.image}`}))
      )
      .subscribe(this.detail$);
  }
}

/*
// Makes 2 http requests

@Component({
  template: `
    <h1>Detail</h1>
    <h2>{{(detail$ | async).name}}</h2>
    <img [src]="(detail$ | async).image"/>
  `,
})
export class DetailComponent {
  detail$;

  constructor(route: ActivatedRoute, http: Http) {
    const starWarsApi = 'https://starwars-json-server-ewtdxbyfdz.now.sh';

    this.detail$ = route.params
      .map((p:any) => p.id)
      .switchMap(id => http.get(`${starWarsApi}/people/${id}`)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, {image: `${starWarsApi}/${contact.image}`}))
      )
      .startWith({name: 'Loading...', image: ''})
  }
}
*/