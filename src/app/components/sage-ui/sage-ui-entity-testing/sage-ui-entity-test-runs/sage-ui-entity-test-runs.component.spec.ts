import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiEntityTestRunsComponent } from './sage-ui-entity-test-runs.component';

describe('SageUiEntityTestRunsComponent', () => {
  let component: SageUiEntityTestRunsComponent;
  let fixture: ComponentFixture<SageUiEntityTestRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SageUiEntityTestRunsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiEntityTestRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
