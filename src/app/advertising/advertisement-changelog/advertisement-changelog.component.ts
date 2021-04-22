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
    this.viewingAds = this.advertisements.splice(this.page * this.size - 1, this.size);
  }

  applyFilters(): void {

  }
}
