import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spine',
  imports: [SideForm,RouterModule],
  templateUrl: './spine.html',
  styleUrl: './spine.css'
})
export class Spine implements OnInit {
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Spine Surgery Options | Advanced & Minimally Invasive Care'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore spine surgery options including minimally invasive, spinal fusion, and disc replacement. Expert spine surgeons & complete patient assistance available.'
    });
  }
}
