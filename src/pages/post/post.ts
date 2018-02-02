import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

class Post{
  id: string;
  title: string;
  body: string;
  constructor(){
    this.title = '';
    this.body = '';
  }
  
}
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: Post = new Post();

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

  submit(){
    const afList = this.db.collection('posts');
    afList.add(Object.assign({}, this.post));

    this.navCtrl.parent.select(0);
    this.post = new Post();
    //this.post.body = '';
    //this.post.title = ''; 
     

  }

}
