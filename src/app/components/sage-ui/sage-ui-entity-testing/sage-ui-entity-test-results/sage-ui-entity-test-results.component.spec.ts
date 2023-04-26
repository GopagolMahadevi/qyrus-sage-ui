import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTestResultsComponent } from './sage-ui-entity-test-results.component';

describe('EntityTestResultsComponent', () => {
  let component: EntityTestResultsComponent;
  let fixture: ComponentFixture<EntityTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityTestResultsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
