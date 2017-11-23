import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  // personKey: String;
  person: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.person = this.afs.collection('people').doc(`${params.id}`).valueChanges();
    });
  }

}
