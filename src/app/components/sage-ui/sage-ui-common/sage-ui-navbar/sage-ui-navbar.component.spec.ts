import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiNavbarComponent } from './sage-ui-navbar.component';

describe('SageUiNavbarComponent', () => {
  let component: SageUiNavbarComponent;
  let fixture: ComponentFixture<SageUiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageUiNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
