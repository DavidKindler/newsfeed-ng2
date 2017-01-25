import { Input, Injectable } from '@angular/core';
import { Http } 	  from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RSSService {
	private _url = "http://localhost:3456/items/";

	constructor(private _http: Http) {
	}

	getRss(region?) {
        var url = this._url;
        // console.log ('getRSS region',region)
        if (region && region.code)
            url +=  region.code;
        
		return this._http.get(url)
			.map(res => {
        // console.log ('Response',res.json());
        return res.json();
      });
			// .map(res => res);
	}
    
	// getComments(postId){
	// 	return this._http.get(this._url + "/" + postId + "/comments")
	// 		.map(res => res.json());
	// }

	addItem(item){
	// this._http.post(this._url, JSON.stringify(user))
	// console.log ('addItem json string', item);
	return this._http.post(this._url+"add", item)
		.map( (res) => {
			if (res.status < 200 || res.status >300) {
				console.log ('request failed');
				throw new Error('This request has failed '+ res.status);
			} else {
				// console.log ('item added. here is response',res.json());
				return res.json();
			}
		});
	}
}
