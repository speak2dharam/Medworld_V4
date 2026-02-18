import { Component, OnDestroy, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mri-guided',
  imports: [SideForm],
  templateUrl: './mri-guided.html',
  styleUrl: './mri-guided.css'
})
export class MriGuided implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'MRI Guided Brain Tumor Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get precise MRI-guided brain tumor surgery in India with expert neurosurgeons, advanced hospitals, and affordable treatment packages. Contact MedWorldIndia today.'
    });
  }
}
