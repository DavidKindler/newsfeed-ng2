import { Router, RouterModule } from "@angular/router";

import { RssComponent } from './rss/rss.component';
import { NotFoundComponent } from './not-found.component';
// import { AuthGuard } from './auth-guard.service';
import { LoginFormComponent } from './login-form/login-form.component';

export const routing = RouterModule.forRoot([
    {path: '', component: RssComponent },
    // {
    //     path: 'news/:region', 
    //     component: RssComponent
    //     // canActivate: [AuthGuard]
    // },
    {path: 'login', component: LoginFormComponent},
    {path: '**', component: NotFoundComponent}

]);