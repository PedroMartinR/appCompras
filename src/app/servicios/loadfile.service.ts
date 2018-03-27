import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';

@Injectable()
export class LoadfileService {

private basePath = '/uploads';
uploads: FirebaseListObservable<Archivo []>;

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  pushUload(upload: Archivo) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    });
  }
saveFileData(upload: Archivo) {
  this.angularFireDatabase.list(`${this.basePath}/`).push(upload);
}
}
