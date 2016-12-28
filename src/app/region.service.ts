import { Injectable } from '@angular/core';

@Injectable()
export class RegionService {

  getRegion(){
    return {
      name: "English",
      code: 'en'
    }
  }

}
