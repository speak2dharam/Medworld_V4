import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cancer',
  imports: [SideForm,RouterModule],
  templateUrl: './cancer.html',
  styleUrl: './cancer.css'
})
export class Cancer implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore all cancer treatment options in India—surgery, chemotherapy, radiation, immunotherapy & more. Trusted hospitals, expert doctors & 24/7 support.'
    });
  }
}