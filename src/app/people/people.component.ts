import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  people: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.people = this.afs.collection('people').valueChanges();
    });
  }

}
