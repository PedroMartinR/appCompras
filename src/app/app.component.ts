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
      authDomain: 'appcompras-db249.firebaseapp.com'
    });
  }

}
