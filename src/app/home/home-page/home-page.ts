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
    this.titleService.setTitle('MedWorldIndia | Affordable Medical Tourism in India & Abroad');
    this.metaService.updateTag({
      name: 'description',
      content: 'Welcome to the home page of My Application. Explore our treatments and consult with us today!'
    });
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'Angular, Meta Tags, SEO, Tutorial' 
    });
  }
}
