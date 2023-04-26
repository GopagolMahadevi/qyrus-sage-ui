import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentIntentReportComponent } from './sage-ui-intent-intent-report.component';

describe('IntentIntentReportComponent', () => {
  let component: IntentIntentReportComponent;
  let fixture: ComponentFixture<IntentIntentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntentIntentReportComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentIntentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
