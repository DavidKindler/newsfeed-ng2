import { RouterModule  }    		  from '@angular/router';

import { RssFormComponent } 		  from './rss-form.component';
import { RssComponent }    		  from './rss.component';
import { LoginFormComponent } from '../login-form/login-form.component';

import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';
import { AuthGuard } from '../auth-guard.service';

export const rssRouting = RouterModule.forChild([
	{ 
		path: 'news/:region/new', 
		component: RssFormComponent,
		canActivate: [AuthGuard],
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'news/:region', 
		component: RssComponent,
		canActivate: []
		// canDeactivate: [ PreventUnsavedChangesGuard ]  
	}
]);