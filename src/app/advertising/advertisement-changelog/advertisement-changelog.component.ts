import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private advertisingService: AdvertisingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.size = 100;
    this.setAdvertisements();
    this.setViewingAds();
    this.setFilters();
  }

  setAdvertisements(): void {
    this.advertisements = this.advertisingService.getAdvertisementList();
  }

  setViewingAds(): void {
    const start: number = (this.page - 1) * this.size;
    const end: number = (this.page) * this.size;
    this.viewingAds = this.advertisements.slice(start, end);
  }

  setFilters(): void {
    this.route.queryParamMap.subscribe(params => {
      this.applyFilters({name: '', date: '', title: '', field: ''});
      if (params.get('sort') !== null) {
        this.sortTable(params.get('sort') || '');
      }
    });
  }

  applyFilters(filters: { name: string, date: string, title: string, field: string }): void {
    type filtersTypeKeys = keyof typeof filters;
    this.setAdvertisements();

    for (const filtersKey of Object.keys(filters)) {
      const filtersValue = filters[filtersKey as filtersTypeKeys];
      if (filtersValue) {
        this.filterAdvertisements(filtersKey, filtersValue);
      } else {
        this.removeQueryParams(filtersKey);
      }
    }

    this.setViewingAds();
  }

  filterAdvertisements(filtersKey: string, filtersValue: string): void {
    type advertisementTypeKeys = keyof Advertisement;
    this.addQueryParam(filtersKey, filtersValue);

    if (filtersKey !== 'date') {
      this.advertisements = this.advertisements.filter(item => {
        return filtersValue === item[filtersKey as advertisementTypeKeys];
      });
    } else {
      this.filterByDate(filtersValue);
    }
  }

  filterByDate(date: string): void {

  }

  changePage(newPage: number): void {
    this.page = newPage;
    this.setViewingAds();
  }

  sortTable(id: string): void {
    type advertisementTypeKeys = keyof Advertisement;
    this.addQueryParam('sort', id);

    this.advertisements.sort((a: Advertisement, b: Advertisement) => {
      if (a[id as advertisementTypeKeys] < b[id as advertisementTypeKeys]) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setViewingAds();
  }

  addQueryParam(name: string, value: string): void {
    const queryParams: Params = {};
    queryParams[name] = value;
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'}).then();
  }

  removeQueryParams(name: string): void {

  }
}
