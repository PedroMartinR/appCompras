import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAVxKWA7eCUSWrIcw_qpGFykn6Ed5qzhGM',
      authDomain: 'appcompras-db249.firebaseapp.com',
      databaseURL: 'https://appcompras-db249.firebaseio.com',
      projectId: 'appcompras-db249',
      storageBucket: 'appcompras-db249.appspot.com',
      messagingSenderId: '550182371963'
    });
  }

}
