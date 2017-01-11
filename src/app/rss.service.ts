import { Input, Injectable } from '@angular/core';

@Injectable()
export class RSSService {

  getRss(region){
    console.log ('rss service - getRSS for',region);
    switch (region.code) {
      case 'jp':
             console.log ('Japan RSS returned');
             return [
              {
                title: "JAPANESE - TITLE1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss2.html",
                deleted: false,
                id: 312
              },
              {
                title: "JAPANESE - TITLE2  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss3.html",
                deleted: true,
                id:93
              },
              {
                title: "JAPANESE - TITLE3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:22
              }
            ]
        // break;
      case 'kr':
            console.log ('Korean RSS returned');
            return [
            {
              title: "KOREAN - RSS TITLE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
              url: "//sample.com/rss1.html",
              deleted: false,
              id : 1
            },
            {
              title: "KOREAN - TITLE2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
              url: "//sample.com/rss2.html",
              deleted: false,
              id: 312
            },
            {
              title: "KOREAN - TITLE3  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
              url: "//sample.com/rss3.html",
              deleted: true,
              id:93
            },
            {
              title: "KOREAN - TITLE4  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
              url: "//sample.com/rss4.html",
              deleted: false,
              id:22
            }
          ]
        // break;
      case 'zh':
        console.log ('China RSS returned');
        return [
              {
                title: "CHINESE - RSS TITLE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss1.html",
                deleted: false,
                id : 1
              },
              {
                title: "CHINESE - TITLE2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss2.html",
                deleted: false,
                id: 312
              },
              {
                title: "CHINESE - TITLE3  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss3.html",
                deleted: true,
                id:93
              },
              {
                title: "CHINESE - TITLE4  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:22
              },
              {
                title: "CHINESE - TITLE5  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:225
              }
            ]
      default:
        console.log ('Default english rss returned');
        return [
              {
                title: "WTFRSS TITLE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
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
              },
              {
                title: "TITLE5  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:242
              },
              {
                title: "TITLE5  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:22
              },
              {
                title: "TITLE6  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora!",
                url: "//sample.com/rss4.html",
                deleted: false,
                id:223
              }
            ]
    }
 
  }

}
