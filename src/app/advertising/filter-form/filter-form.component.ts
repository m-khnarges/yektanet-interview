import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
  filterForm: FormGroup;
  @Output() applyFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.initForm();
  }

  createForm(): void {
    this.filterForm = this.formBuilder.group({
      name: [],
      date: [],
      title: [],
      field: [],
    });
  }

  initForm(): void {
    this.route.queryParamMap.subscribe(params => {
      this.filterForm.patchValue({name: params.get('name')});
      this.filterForm.patchValue({date: params.get('date')});
      this.filterForm.patchValue({title: params.get('title')});
      this.filterForm.patchValue({field: params.get('field')});

      this.submit();
    });
  }

  submit(): void {
    this.applyFilter.emit(this.filterForm.value);
  }
}
