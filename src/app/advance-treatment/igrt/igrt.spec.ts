import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Igrt } from './igrt';

describe('Igrt', () => {
  let component: Igrt;
  let fixture: ComponentFixture<Igrt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Igrt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Igrt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
