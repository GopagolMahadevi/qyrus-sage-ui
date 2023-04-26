import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiComponent } from './sage-ui.component';

describe('SageUiComponent', () => {
  let component: SageUiComponent;
  let fixture: ComponentFixture<SageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
