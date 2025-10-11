import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Robotics } from './robotics';

describe('Robotics', () => {
  let component: Robotics;
  let fixture: ComponentFixture<Robotics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Robotics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Robotics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
