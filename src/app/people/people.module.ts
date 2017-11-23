import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

import { PeopleComponent } from './people.component';
import { AddPersonComponent} from './add/add.component';

// Services
import { PeopleService } from './people.service';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'add', component: AddPersonComponent }
];

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes) ],
  declarations: [PeopleComponent, AddPersonComponent],
  providers: [ PeopleService ]
})

export class PeopleModule { }
