import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hifu } from './hifu';

describe('Hifu', () => {
  let component: Hifu;
  let fixture: ComponentFixture<Hifu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hifu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hifu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
