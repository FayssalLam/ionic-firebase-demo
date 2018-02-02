import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';

const config = {
  apiKey: "AIzaSyDJK-wj6y_HkBN2E5r1R7iNktp5pGFzt5U",
  authDomain: "ionicdev-722eb.firebaseapp.com",
  databaseURL: "https://ionicdev-722eb.firebaseio.com",
  projectId: "ionicdev-722eb",
  storageBucket: "",
  messagingSenderId: "971929846087"
};

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    HomePage,
    TabsPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config, 'test'),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostPage,
    HomePage,
    TabsPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
