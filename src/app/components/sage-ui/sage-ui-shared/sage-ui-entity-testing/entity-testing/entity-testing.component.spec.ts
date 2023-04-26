import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTestingComponent } from './entity-testing.component';

describe('EntityTestingComponent', () => {
  let component: EntityTestingComponent;
  let fixture: ComponentFixture<EntityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
