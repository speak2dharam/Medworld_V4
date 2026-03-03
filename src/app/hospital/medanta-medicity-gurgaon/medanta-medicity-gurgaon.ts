import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-medanta-medicity-gurgaon',
  imports: [SideForm],
  templateUrl: './medanta-medicity-gurgaon.html',
  styleUrl: './medanta-medicity-gurgaon.css'
})
export class MedantaMedicityGurgaon implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Medanta – The Medicity Hospital'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Medanta – The Medicity Hospital offers high success rates, expert doctors, and advanced healthcare for Indian & international patients.'
    });
  }
}
