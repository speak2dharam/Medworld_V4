import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-oral-cancer',
  imports: [SideForm],
  templateUrl: './oral-cancer.html',
  styleUrl: './oral-cancer.css'
})
export class OralCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Oral Cancer Treatment in India | Surgery & Advanced Care'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore oral cancer treatment options in India—surgery, radiation, and chemotherapy at top hospitals with expert oncologists and 24/7 patient support.'
    });
  }
}