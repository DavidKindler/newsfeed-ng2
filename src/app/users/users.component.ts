import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'rss-users',
  templateUrl: './users.component.html',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor( private _service: UsersService) { 

  }

  ngOnInit() {
    this._service.getUsers().subscribe(users => this.users=users);
  }

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      let index = this.users.indexOf(user)
      this.users.splice(index,1);
      this._service.deleteUser(user.id)
      .subscribe(null, err => { 
        alert("Could not delete the user")
        this.users.splice(index, 0, user);
        });
    }
  }
}
