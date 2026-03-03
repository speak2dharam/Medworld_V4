import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cardiac-surgery',
  imports: [SideForm],
  templateUrl: './cardiac-surgery.html',
  styleUrl: './cardiac-surgery.css'
})
export class CardiacSurgery implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Cardiac Surgery in India | Affordable Heart Surgery & Expert Care'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Experience world-class cardiac surgery in India with top heart hospitals, robotic and minimally invasive techniques, high success rates & cost savings for international patients.'
    });
  }
}
