import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cosmetic-rhinoplasty',
  imports: [SideForm],
  templateUrl: './cosmetic-rhinoplasty.html',
  styleUrl: './cosmetic-rhinoplasty.css'
})
export class CosmeticRhinoplasty implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Cosmetic Rhinoplasty in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Enhance your nose shape with cosmetic rhinoplasty in India. Expert facial surgeons, natural-looking results & affordable cost. Book your consultation today.'
    });
  }
}