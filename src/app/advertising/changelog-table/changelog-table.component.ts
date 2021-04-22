import {Component, Input, OnInit} from '@angular/core';
import {Advertisement} from '../../core/models/advertisement';

@Component({
  selector: 'app-changelog-table',
  templateUrl: './changelog-table.component.html',
  styleUrls: ['./changelog-table.component.css']
})
export class ChangelogTableComponent implements OnInit {
  @Input() advertisements: Advertisement[];

  constructor() { }

  ngOnInit(): void {
  }

}
