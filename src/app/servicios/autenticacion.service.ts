import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AutenticacionService {

  constructor() { }

  registroUsuario(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
    .catch(error =>{
      console.log(error);
    });
  }

}
