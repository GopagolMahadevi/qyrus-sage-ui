import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentEditTestCaseComponent } from './sage-ui-intent-edit-test-case.component';

describe('IntentEditTestCaseComponent', () => {
  let component: IntentEditTestCaseComponent;
  let fixture: ComponentFixture<IntentEditTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntentEditTestCaseComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentEditTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
