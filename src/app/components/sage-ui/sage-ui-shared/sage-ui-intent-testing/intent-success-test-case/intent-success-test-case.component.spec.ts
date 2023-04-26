import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentSuccessTestCaseComponent } from './intent-success-test-case.component';

describe('IntentSuccessTestCaseComponent', () => {
  let component: IntentSuccessTestCaseComponent;
  let fixture: ComponentFixture<IntentSuccessTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentSuccessTestCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentSuccessTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
