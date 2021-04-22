import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersianNumberPipe } from './pipes/persian-number.pipe';
import { AcceptPersianNumberDirective } from './directives/accept-persian-number.directive';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    PersianNumberPipe,
    AcceptPersianNumberDirective,
    PaginationComponent
  ],
  exports: [
    CommonModule,
    PersianNumberPipe,
    AcceptPersianNumberDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
