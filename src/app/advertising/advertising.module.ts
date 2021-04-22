import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { AdvertisementChangelogComponent } from './advertisement-changelog/advertisement-changelog.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { ChangelogTableComponent } from './changelog-table/changelog-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdvertisementChangelogComponent,
    FilterFormComponent,
    ChangelogTableComponent,
  ],
  imports: [
    SharedModule,
    AdvertisingRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdvertisingModule { }
