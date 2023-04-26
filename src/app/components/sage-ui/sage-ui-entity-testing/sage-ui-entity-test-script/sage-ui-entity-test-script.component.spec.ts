import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTestScriptComponent } from './sage-ui-entity-test-script.component';

describe('EntityTestScriptComponent', () => {
  let component: EntityTestScriptComponent;
  let fixture: ComponentFixture<EntityTestScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityTestScriptComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTestScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
