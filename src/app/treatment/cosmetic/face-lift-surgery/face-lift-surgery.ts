import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-face-lift-surgery',
  imports: [SideForm],
  templateUrl: './face-lift-surgery.html',
  styleUrl: './face-lift-surgery.css'
})
export class FaceLiftSurgery implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Face Lift Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get face lift surgery in India to reduce wrinkles, sagging & signs of aging. Natural-looking results by expert plastic surgeons. Enquire for details today.'
    });
  }
}