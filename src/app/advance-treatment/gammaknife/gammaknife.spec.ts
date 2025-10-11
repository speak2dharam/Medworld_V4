import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gammaknife } from './gammaknife';

describe('Gammaknife', () => {
  let component: Gammaknife;
  let fixture: ComponentFixture<Gammaknife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gammaknife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gammaknife);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
