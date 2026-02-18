import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cosmetic',
  imports: [SideForm,RouterModule],
  templateUrl: './cosmetic.html',
  styleUrl: './cosmetic.css'
})
export class Cosmetic implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Cosmetic Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Enhance your appearance with advanced cosmetic surgery in India. Face, body & hair procedures by skilled surgeons at affordable cost. Enquire for a consultation.'
    });
  }
}
