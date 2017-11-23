import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { PersonComponent } from './person.component';

// Services
// import { MyProjectService } from './my-project.service';

const routes: Routes = [
  { path: '', component: PersonComponent }
];

@NgModule({
  imports: [ SharedModule, RouterModule.forChild(routes) ],
  declarations: [PersonComponent]
  // ,providers: [ MyProjectService ]
})

export class PersonModule { }

