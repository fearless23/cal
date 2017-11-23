import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class PeopleService {

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  getPeople() {
    const PEOPLE = this.afs.collection('people').valueChanges();
    return PEOPLE;
  }

  addPerson(personData ) {
    const PUSHKEY = this.afs.createId();
    const PERSON = {
      'pushKey': PUSHKEY,
      'dateAdded': new Date().getTime(),
      ...personData
    };
    this.afs.collection('people').doc(PUSHKEY).set(PERSON);
    this.router.navigateByUrl('people');
  }
}

