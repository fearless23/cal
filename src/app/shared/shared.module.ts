import { NgModule } from '@angular/core';

// From Angular
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Shared Pipes: Declare and export
import { FilterPipe } from './pipes/filter.pipe';
import { StringSearchPipe } from './pipes/string-search.pipe';
import { TrueFalsePipe } from './pipes/true-false.pipe';

@NgModule({
  imports: [
    // CommonModule,
    // MomentModule,
    // NgxMyDatePickerModule
    // Import these if component inside this module need these
    // but we have no components so far
  ],
  declarations: [
    FilterPipe,
    StringSearchPipe,
    TrueFalsePipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // Pipes
    FilterPipe,
    StringSearchPipe,
    TrueFalsePipe
  ]
})
export class SharedModule { }
