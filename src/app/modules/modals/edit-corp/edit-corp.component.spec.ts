import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCorpComponent } from './edit-corp.component';

describe('EditCorpComponent', () => {
  let component: EditCorpComponent;
  let fixture: ComponentFixture<EditCorpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCorpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
