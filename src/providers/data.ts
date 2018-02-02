import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  public posts: ReplaySubject<{}> = new ReplaySubject();

  constructor() {
    console.log('Hello Data Provider');
  }
  get Post(){
    return this.posts;
  }

  addPost(post){
    this.posts.next(post);
  }

}
