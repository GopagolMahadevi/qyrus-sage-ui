import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentTestingComponent } from './intent-testing.component';

describe('IntentTestingComponent', () => {
  let component: IntentTestingComponent;
  let fixture: ComponentFixture<IntentTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
