import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageUiEntityTestPhrasesComponent } from './sage-ui-entity-test-phrases.component';

describe('SageUiEntityTestPhrasesComponent', () => {
  let component: SageUiEntityTestPhrasesComponent;
  let fixture: ComponentFixture<SageUiEntityTestPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageUiEntityTestPhrasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageUiEntityTestPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
