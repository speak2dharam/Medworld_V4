import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyIndia } from './why-india';

describe('WhyIndia', () => {
  let component: WhyIndia;
  let fixture: ComponentFixture<WhyIndia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyIndia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyIndia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
