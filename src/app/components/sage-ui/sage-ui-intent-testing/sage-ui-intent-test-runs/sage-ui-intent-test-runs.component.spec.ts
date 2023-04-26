import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiIntentTestRunsComponent } from './sage-ui-intent-test-runs.component';

describe('SageUiIntentTestRunsComponent', () => {
  let component: SageUiIntentTestRunsComponent;
  let fixture: ComponentFixture<SageUiIntentTestRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SageUiIntentTestRunsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiIntentTestRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
