import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-weightloss',
  imports: [SideForm],
  templateUrl: './weightloss.html',
  styleUrl: './weightloss.css'
})
export class Weightloss implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Weight Loss Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Affordable weight loss surgery in India including gastric bypass, sleeve gastrectomy & more. Safe, effective treatment by top bariatric surgeons. Enquire now.'
    });
  }
}