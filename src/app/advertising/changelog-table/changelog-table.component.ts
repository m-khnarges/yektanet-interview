import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advertisement} from '../../core/models/advertisement';

@Component({
  selector: 'app-changelog-table',
  templateUrl: './changelog-table.component.html',
  styleUrls: ['./changelog-table.component.css']
})
export class ChangelogTableComponent implements OnInit {
  @Input() advertisements: Advertisement[];
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();
  headers: { id: string, name: string }[];
  starredRecords: Advertisement[];

  constructor() { }

  ngOnInit(): void {
    this.setHeaderNames();
    this.setStarredRecords();
  }

  setHeaderNames(): void {
    this.headers = [
      {id: 'id', name: 'ردیف'},
      {id: 'name', name: 'نام تغییردهنده'},
      {id: 'date', name: 'تاریخ'},
      {id: 'title', name: 'نام آگهی'},
      {id: 'field', name: 'فیلد'},
      {id: 'old_value', name: 'مقدار قدیمی'},
      {id: 'new_value', name: 'مقدار جدید'},
    ];
  }

  setStarredRecords(): void {
    const records = localStorage.getItem('starredRecords');
    this.starredRecords = records ? JSON.parse(records) : [];
    console.log(this.starredRecords);
  }

  starRecord(item: Advertisement): void {
    if (this.isRecordStarred(item)) {
      this.starredRecords = this.starredRecords.filter(record => record.id !== item.id);
    } else {
      this.starredRecords.push(item);
    }

    localStorage.setItem('starredRecords', JSON.stringify(this.starredRecords));
  }

  isRecordStarred(item: Advertisement): boolean {
    return this.starredRecords.filter(record => item.id === record.id).length > 0;
  }

  sortBy(id: string): void {
    this.sort.emit(id);
  }
}
