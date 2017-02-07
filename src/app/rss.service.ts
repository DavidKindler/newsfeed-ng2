import { Input, Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RSSService {
	private _url = "http://localhost:3456/items/";

	

	constructor(private _http: Http) {

	}

	getRss(region?) {
        var url = this._url;
        if (region && region.code)
            url +=  region.code;
        
		return this._http.get(url)
			.map( (res) => {
				if (res.status < 200 || res.status >300) {
					console.log ('request failed');
					throw new Error('This request has failed '+ res.status);
				} else {
					return res.json();
				}
			});
	}
	
	getRssItem(item) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });   
		let data = {};
		data["region"] = item["region"];
		data["url"] = decodeURIComponent(decodeURIComponent(item["url"]));
		return this._http.post(this._url+"edit",data,options)
			.map( (res) => {
				if (res.status < 200 || res.status >300) {
					console.log ('request failed');
					throw new Error('This request has failed '+ res.status);
				} else {
					// console.log ('getRssItem response',res.json())
					return res.json();
				}
			});
	}


	addItem(item){
	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
	return this._http.post(this._url+"add", item, options)
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

	deleteItem(item){
	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
	console.log ('delteItem json string', item);
	return this._http.delete(this._url+'delete', new RequestOptions({
		headers: headers,
		body: item
	}))
	// return this._http.delete(this._url+"delete", item, options)
		.map( (res) => {
			if (res.status < 200 || res.status >300) {
				console.log ('request failed');
				throw new Error('This request has failed '+ res.status);
			} else {
				return res.json();
			}
		});
	}
}
