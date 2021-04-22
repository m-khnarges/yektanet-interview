import {Component, Input, OnInit} from '@angular/core';
import {Advertisement} from '../../core/models/advertisement';

@Component({
  selector: 'app-changelog-table',
  templateUrl: './changelog-table.component.html',
  styleUrls: ['./changelog-table.component.css']
})
export class ChangelogTableComponent implements OnInit {
  @Input() advertisements: Advertisement[];
  starredRecords: Advertisement[];

  constructor() { }

  ngOnInit(): void {
    this.setStarredRecords();
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
}
