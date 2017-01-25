import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
	private _url = "http://jsonplaceholder.typicode.com/users";
	// users: any[];

	constructor(private _http: Http){
	}

	ngOnInit() {
		// this.users=this.getUsers();
	}

	getUsers(){
		return this._http.get(this._url)
			.map(res => {
				console.log ('getUsers',res.json());
				return res.json();
		});
	}
    
    getUser(userId){
		return this._http.get(this.getUserUrl(userId))
			.map(res => {
				console.log ('getUser',res.json());
				return res.json()
			});
	}
    
    addUser(user){
		// this._http.post(this._url, JSON.stringify(user))
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => {
				console.log ('user added. here is response',res.json());
				return res.json();
				});
	}
    
    updateUser(user){
		return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
			.map(res => { 
				console.log ('user saved. here is response', res.json());
				return res.json();
			}
		);
	}
    
    deleteUser(userId){
		return this._http.delete(this.getUserUrl(userId))
			.map(res => {
				console.log ('user deleted, here is response',res.json());
				return res.json()
			});
	}
    
    private getUserUrl(userId){
		return this._url + "/" + userId;
	}
}