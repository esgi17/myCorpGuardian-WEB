import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoorsComponent } from './list-doors.component';

describe('ListDoorsComponent', () => {
  let component: ListDoorsComponent;
  let fixture: ComponentFixture<ListDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
