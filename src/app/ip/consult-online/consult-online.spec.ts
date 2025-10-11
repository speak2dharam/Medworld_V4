import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultOnline } from './consult-online';

describe('ConsultOnline', () => {
  let component: ConsultOnline;
  let fixture: ComponentFixture<ConsultOnline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultOnline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultOnline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
