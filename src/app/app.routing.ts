import { Router, RouterModule } from "@angular/router";

import { RssComponent } from './rss/rss.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    {path: '', component: RssComponent },
    {path: 'users', component: UsersComponent },
    {path: 'posts', component: PostsComponent },
    {path: 'news/:region', component: RssComponent },
    {path: '**', component: NotFoundComponent}

]);