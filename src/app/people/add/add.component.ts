import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddPersonComponent implements OnInit {

  addPersonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.addPersonForm = this.fb.group({
      'name': [null, Validators.required],
      'category': [null, Validators.required],
      'description': [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(300)
      ])]
    });

  }

  addPerson(personData) {
    this.peopleService.addPerson(personData);
  }

}
