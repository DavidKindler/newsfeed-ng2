import { Injectable, Output } from '@angular/core';

@Injectable()
export class RegionService {

getRegion(region){
  console.log ('region service got paramter:: ', region)
     switch (region) {
      case "jp":
        return {name: "Japan",code: "jp"}
      case "zh":
        return {name: "China", code: "zh"}
      case "kr":
        return {name: "Korea", code: "kr"}
      default:
        return {name: "English",code: 'en'}
      }
  }

}
