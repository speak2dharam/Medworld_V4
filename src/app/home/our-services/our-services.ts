import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  imports: [SideForm],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css'
})
export class OurServices implements OnInit {
   constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Medworldindia Services'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'MedWorldIndia offers end-to-end medical services for international patients, connecting them with top hospitals and expert doctors in India.'
    });
  }
}
