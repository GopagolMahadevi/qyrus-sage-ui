import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentTestReportComponent } from './sage-ui-intent-test-report.component';

describe('IntentTestReportComponent', () => {
  let component: IntentTestReportComponent;
  let fixture: ComponentFixture<IntentTestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntentTestReportComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
