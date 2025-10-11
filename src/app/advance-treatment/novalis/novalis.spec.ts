import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novalis } from './novalis';

describe('Novalis', () => {
  let component: Novalis;
  let fixture: ComponentFixture<Novalis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Novalis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Novalis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
