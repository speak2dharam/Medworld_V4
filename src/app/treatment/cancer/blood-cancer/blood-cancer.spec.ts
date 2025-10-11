import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodCancer } from './blood-cancer';

describe('BloodCancer', () => {
  let component: BloodCancer;
  let fixture: ComponentFixture<BloodCancer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodCancer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodCancer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
