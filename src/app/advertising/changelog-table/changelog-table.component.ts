import {Component, Input, OnInit} from '@angular/core';
import {Advertisement} from '../../core/models/advertisement';

@Component({
  selector: 'app-changelog-table',
  templateUrl: './changelog-table.component.html',
  styleUrls: ['./changelog-table.component.css']
})
export class ChangelogTableComponent implements OnInit {
  @Input() advertisements: Advertisement[];
  headers: { id: number, name: string }[];
  starredRecords: Advertisement[];

  constructor() { }

  ngOnInit(): void {
    this.setHeaderNames();
    this.setStarredRecords();
  }

  setHeaderNames(): void {
    this.headers = [
      {id: 0, name: 'ردیف'},
      {id: 1, name: 'نام تغییردهنده'},
      {id: 2, name: 'تاریخ'},
      {id: 3, name: 'نام آگهی'},
      {id: 4, name: 'فیلد'},
      {id: 5, name: 'مقدار قدیمی'},
      {id: 6, name: 'مقدار جدید'},
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

  sortBy(): void {

  }
}
