import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Observable<any[]>;

  constructor(public navCtrl: NavController, public db:AngularFirestore) {
    this.posts = db.collection('/posts').valueChanges();
  }



}
