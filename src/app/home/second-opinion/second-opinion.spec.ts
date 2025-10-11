import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondOpinion } from './second-opinion';

describe('SecondOpinion', () => {
  let component: SecondOpinion;
  let fixture: ComponentFixture<SecondOpinion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondOpinion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondOpinion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
