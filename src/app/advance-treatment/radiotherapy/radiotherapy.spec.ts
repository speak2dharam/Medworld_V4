import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radiotherapy } from './radiotherapy';

describe('Radiotherapy', () => {
  let component: Radiotherapy;
  let fixture: ComponentFixture<Radiotherapy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Radiotherapy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Radiotherapy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
