import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiDashboardComponent } from './sage-ui-dashboard.component';

describe('SageUiDashboardComponent', () => {
  let component: SageUiDashboardComponent;
  let fixture: ComponentFixture<SageUiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageUiDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
