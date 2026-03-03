import { Component, OnInit } from '@angular/core';
import { TreatmentAll } from '../../treatment/treatment-all/treatment-all';
import { ConsultForm } from '../../core/layout/consult-form/consult-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  imports: [TreatmentAll,ConsultForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
   constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'MedWorldIndia Trusted Medical Tourism Company in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get access to top hospitals in India, UAE & Turkey. Affordable treatments, expert doctors, 24/7 support & end-to-end medical tourism services with MedWorldIndia.'
    });
  }
}
