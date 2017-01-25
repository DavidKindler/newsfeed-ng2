import { RouterModule  }    		  from '@angular/router';

import { RssFormComponent } 		  from './rss-form.component';
import { RssComponent }    		  from './rss.component';
// import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';

export const rssRouting = RouterModule.forChild([
	{ 
		path: 'news/:region/new', 
		component: RssFormComponent
		// canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'news/:region', 
		component: RssComponent
		// canDeactivate: [ PreventUnsavedChangesGuard ]  
	}
]);