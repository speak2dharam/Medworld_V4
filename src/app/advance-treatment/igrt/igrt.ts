import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-igrt',
  imports: [SideForm],
  templateUrl: './igrt.html',
  styleUrl: './igrt.css'
})
export class Igrt implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Image Guided Radiotherapy (IGRT)-Cost, Hospitals & Specialists'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced Image Guided Radiotherapy (IGRT) in India with expert oncologists, modern hospitals, and affordable treatment packages. Contact MedWorldIndia today.'
    });
  }
}
