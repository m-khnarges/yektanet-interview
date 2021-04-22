import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisementChangelogComponent } from './advertisement-changelog/advertisement-changelog.component';
import { FilterFormComponent } from './filter-form/filter-form.component';


@NgModule({
  declarations: [
    AdvertisementChangelogComponent,
    FilterFormComponent
  ],
  imports: [
    CommonModule,
    AdvertisingRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdvertisingModule { }
