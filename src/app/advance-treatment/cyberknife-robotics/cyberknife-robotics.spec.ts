import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberknifeRobotics } from './cyberknife-robotics';

describe('CyberknifeRobotics', () => {
  let component: CyberknifeRobotics;
  let fixture: ComponentFixture<CyberknifeRobotics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberknifeRobotics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberknifeRobotics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
