import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lung-cancer',
  imports: [SideForm],
  templateUrl: './lung-cancer.html',
  styleUrl: './lung-cancer.css'
})
export class LungCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Lung Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore lung cancer treatment options including surgery, chemotherapy, radiation, targeted therapy & immunotherapy. Expert care and 24/7 patient support.'
    });
  }
}
