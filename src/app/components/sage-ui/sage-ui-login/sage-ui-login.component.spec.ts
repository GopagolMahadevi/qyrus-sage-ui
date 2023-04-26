import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiLoginComponent } from './sage-ui-login.component';

describe('SageUiLoginComponent', () => {
  let component: SageUiLoginComponent;
  let fixture: ComponentFixture<SageUiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageUiLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
