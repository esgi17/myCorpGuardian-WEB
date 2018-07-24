import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorpComponent } from './list-corp.component';

describe('ListCorpComponent', () => {
  let component: ListCorpComponent;
  let fixture: ComponentFixture<ListCorpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCorpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
