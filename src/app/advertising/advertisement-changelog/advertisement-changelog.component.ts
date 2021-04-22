import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../core/models/advertisement';
import { AdvertisingService } from '../../core/services/advertising.service';

@Component({
  selector: 'app-advertisement-changelog',
  templateUrl: './advertisement-changelog.component.html',
  styleUrls: ['./advertisement-changelog.component.css']
})
export class AdvertisementChangelogComponent implements OnInit {
  advertisements: Advertisement[];
  viewingAds: Advertisement[];
  page: number;
  size: number;

  constructor(private advertisingService: AdvertisingService) { }

  ngOnInit(): void {
    this.page = 1;
    this.size = 100;
    this.setAdvertisements();
    this.setViewingAds();
  }

  setAdvertisements(): void {
    this.advertisements = this.advertisingService.getAdvertisementList();
  }

  setViewingAds(): void {
    const start: number = (this.page - 1) * this.size;
    const end: number = (this.page) * this.size;
    this.viewingAds = this.advertisements.slice(start, end);
  }

  applyFilters(): void {

  }

  changePage(newPage: number): void {
    this.page = newPage;
    this.setViewingAds();
  }

  sortTable(id: string): void {
    type x = keyof Advertisement;
    this.advertisements.sort((a: Advertisement, b: Advertisement) => {
      if (a[id as x] < b[id as x]) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setViewingAds();
  }
}
