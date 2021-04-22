import { Injectable } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import * as data from '../../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor() { }

  getAdvertisementList(): Advertisement[] {
    return data as Advertisement[];
  }
}
