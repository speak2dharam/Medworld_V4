import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentAll } from './treatment-all';

describe('TreatmentAll', () => {
  let component: TreatmentAll;
  let fixture: ComponentFixture<TreatmentAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
