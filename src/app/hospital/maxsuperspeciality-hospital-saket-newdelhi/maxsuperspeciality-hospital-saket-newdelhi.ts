import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maxsuperspeciality-hospital-saket-newdelhi',
  imports: [SideForm],
  templateUrl: './maxsuperspeciality-hospital-saket-newdelhi.html',
  styleUrl: './maxsuperspeciality-hospital-saket-newdelhi.css'
})
export class MaxsuperspecialityHospitalSaketNewdelhi implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Max Super Speciality Hospital'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Max Super Speciality Hospital is among India’s top hospitals delivering high success rates and patient-focused care.'
    });
  }
}
