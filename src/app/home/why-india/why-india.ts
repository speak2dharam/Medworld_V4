import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-why-india',
  imports: [SideForm],
  templateUrl: './why-india.html',
  styleUrl: './why-india.css'
})
export class WhyIndia implements OnInit{
   constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Why Choose India for Medical Treatment'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'India is a leading medical tourism destination offering world-class hospitals, expert doctors, advanced treatments, and affordable care.'
    });
  }
}
