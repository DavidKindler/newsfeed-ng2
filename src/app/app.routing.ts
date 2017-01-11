import { Router, RouterModule } from "@angular/router";

import { RssComponent } from './rss/rss.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    {path: '', component: RssComponent },
    {path: ':region', component: RssComponent },
    {path: '**', component: NotFoundComponent}

]);