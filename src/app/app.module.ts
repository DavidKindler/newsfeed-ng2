import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule }      from './shared/shared.module';
import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './header/dropdown.directive';
import { RssComponent } from './rss/rss.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SignupFormComponent } from './login-form/signup-form.component';
import { NotFoundComponent } from './not-found.component';

import { routing } from './app.routing';
import { usersRouting }      from './users/users.routing';
import { postsRouting } from './posts/posts.routing';
import { rssRouting } from './rss/rss.routing';
import { PostsComponent } from './posts/posts.component';
import { RssFormComponent } from './rss/rss-form.component';

import { DatePickerModule } from 'ng2-datepicker';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    RssComponent,
    LoginFormComponent,
    SearchFormComponent,
    SignupFormComponent,
    NotFoundComponent,
    RssFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    CustomFormsModule,
    UsersModule,
    PostsModule,
    ReactiveFormsModule,
    rssRouting,
    usersRouting,
    postsRouting,
    routing,
    SharedModule   
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
