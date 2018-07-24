import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCorpComponent } from './form-corp.component';

describe('FormCorpComponent', () => {
  let component: FormCorpComponent;
  let fixture: ComponentFixture<FormCorpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCorpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
