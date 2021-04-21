import { Injectable } from '@angular/core';
import { Advertisement } from '../models/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  constructor() { }

  getAdvertisementList(): Advertisement[] {
    return [];
  }
}
