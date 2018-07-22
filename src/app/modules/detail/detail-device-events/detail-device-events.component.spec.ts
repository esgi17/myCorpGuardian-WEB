import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDeviceEventsComponent } from './detail-device-events.component';

describe('DetailDeviceEventsComponent', () => {
  let component: DetailDeviceEventsComponent;
  let fixture: ComponentFixture<DetailDeviceEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDeviceEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDeviceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
