// app.routing.ts
// App Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// NotFoundComponent can`t be lazy loaded
import { HeaderComponent } from './header/header.component';

// Routes
const routes: Routes = [
  { path: 'people', loadChildren: './people/people.module#PeopleModule' },
  { path: 'person/:id', loadChildren: './person/person.module#PersonModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const rc = [HeaderComponent];
