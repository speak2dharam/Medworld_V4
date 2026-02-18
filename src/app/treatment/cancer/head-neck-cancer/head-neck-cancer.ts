import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-head-neck-cancer',
  imports: [SideForm],
  templateUrl: './head-neck-cancer.html',
  styleUrl: './head-neck-cancer.css'
})
export class HeadNeckCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Head & Neck Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore head and neck cancer treatments including surgery, radiation, chemotherapy & targeted therapy. Multidisciplinary care with full patient support.'
    });
  }
}
