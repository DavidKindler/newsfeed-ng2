import { Injectable } from '@angular/core';

@Injectable()
export class RSSService {

  getRss(){
    return [
      {
        title: "RSS TITLE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
        url: "//sample.com/rss1.html",
        deleted: false,
        id : 1
      },
      {
        title: "TITLE2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
        url: "//sample.com/rss2.html",
        deleted: false,
        id: 312
      },
      {
        title: "TITLE3  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
        url: "//sample.com/rss3.html",
        deleted: true,
        id:93
      },
      {
        title: "TITLE4  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
        url: "//sample.com/rss4.html",
        deleted: false,
        id:22
      }
    ]
  }

}
