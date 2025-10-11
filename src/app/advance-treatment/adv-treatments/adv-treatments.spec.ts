import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTreatments } from './adv-treatments';

describe('AdvTreatments', () => {
  let component: AdvTreatments;
  let fixture: ComponentFixture<AdvTreatments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvTreatments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvTreatments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
