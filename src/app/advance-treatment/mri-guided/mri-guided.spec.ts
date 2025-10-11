import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MriGuided } from './mri-guided';

describe('MriGuided', () => {
  let component: MriGuided;
  let fixture: ComponentFixture<MriGuided>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MriGuided]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MriGuided);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
