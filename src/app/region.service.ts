import { Injectable, Output } from '@angular/core';

@Injectable()
export class RegionService {

getRegion(params){
  // console.log ('region service got paramter:: ', params)
     switch (params['region']) {
      case "ja":
        return {name: "Japan",code: "ja"}
      case "ch":
        return {name: "China", code: "ch"}
      case "ko":
        return {name: "Korea", code: "ko"}
      default:
        return {name: "English",code: 'en'}
      }
  }

}
