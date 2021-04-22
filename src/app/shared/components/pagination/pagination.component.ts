import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() size: number;
  @Input() count: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  first(): void {
    if (!this.isFirstPage) {
      this.changePage.emit(1);
    }
  }

  previous(): void {
    if (!this.isFirstPage) {
      this.changePage.emit(--this.page);
    }
  }

  next(): void {
    if (!this.isLastPage) {
      this.changePage.emit(++this.page);
    }
  }

  last(): void {
    if (!this.isLastPage) {
      this.changePage.emit(Math.ceil(this.count / this.size));
    }
  }

  get isLastPage(): boolean {
    return this.count === this.page * this.size;
  }

  get isFirstPage(): boolean {
    return this.page === 1;
  }
}
