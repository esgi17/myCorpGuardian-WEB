import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCameraComponent } from './overview-camera.component';

describe('OverviewCameraComponent', () => {
  let component: OverviewCameraComponent;
  let fixture: ComponentFixture<OverviewCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
