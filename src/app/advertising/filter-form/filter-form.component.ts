import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  filterForm: FormGroup;
  @Output() applyFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.filterForm = this.formBuilder.group({
      name: [],
      date: [],
      title: [],
      field: [],
    });
  }

  submit(): void {
    this.applyFilter.emit(this.filterForm.value);
  }
}
