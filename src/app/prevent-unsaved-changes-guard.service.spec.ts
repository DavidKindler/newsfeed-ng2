/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreventUnsavedChangesGuardService } from './prevent-unsaved-changes-guard.service';

describe('PreventUnsavedChangesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventUnsavedChangesGuardService]
    });
  });

  it('should ...', inject([PreventUnsavedChangesGuardService], (service: PreventUnsavedChangesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
