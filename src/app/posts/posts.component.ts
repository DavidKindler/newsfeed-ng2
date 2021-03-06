
import { Component, OnInit } from '@angular/core';

import { PostService }       from './post.service';
import { UsersService }       from '../users/users.service';

import * as _ from 'underscore';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styles: [`
        .posts li { cursor: default; }
        .posts-table td:hover, .posts li:hover { background: #ecf0f1; } 
        .posts-table td.active, .list-group-item.active, 
        .posts-table td.active:hover, .list-group-item.active:hover, 
        .posts-table td.active:focus, .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
})
export class PostsComponent implements OnInit {
	posts = [];
    pagedPosts = [];
    users = [];
    postsLoading;
    commentsLoading;
    currentPost;
    pageSize = 10;
    
    constructor(
        private _postService: PostService,
        private _userService: UsersService) {
	}

	ngOnInit() {
        this.loadUsers();
        this.loadPosts();        
	}
    
    private loadUsers(){
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
    
    private loadPosts(filter?){
        this.postsLoading = true; 
		this._postService.getPosts(filter)
			.subscribe(
                posts => {
                    this.posts = posts;
                    this.pagedPosts = _.take(this.posts, this.pageSize);
                },
                null,
                () => { this.postsLoading = false; });
    }
    
    reloadPosts(filter){
        this.currentPost = null;
        
        this.loadPosts(filter);
    }
    
    select(post){
		this.currentPost = post; 
        
        this.commentsLoading = true;
        this._postService.getComments(post.id)
			.subscribe(
                comments => 
                    this.currentPost.comments = comments,
                null,
                () => this.commentsLoading = false); 
    } 
    
	onPageChanged(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
	}
}