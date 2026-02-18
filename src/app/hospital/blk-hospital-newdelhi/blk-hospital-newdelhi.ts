import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blk-hospital-newdelhi',
  imports: [SideForm],
  templateUrl: './blk-hospital-newdelhi.html',
  styleUrl: './blk-hospital-newdelhi.css'
})
export class BlkHospitalNewdelhi implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'BLK Super Specialty Hospital'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'BLK Super Specialty Hospital is one of India’s top hospitals delivering high success rates and patient-focused care.'
    });
  }
}
