import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transplant',
  imports: [SideForm,RouterModule],
  templateUrl: './transplant.html',
  styleUrl: './transplant.css'
})
export class Transplant implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Organ Transplant in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Affordable organ transplant in India by top surgeons. Kidney, liver, heart & lung transplants with high success rate & world-class hospitals. Enquire now'
    });
  }
}
