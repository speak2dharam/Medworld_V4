import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-radiotherapy',

  imports: [SideForm],
  templateUrl: './radiotherapy.html',
  styleUrl: './radiotherapy.css'
})
export class Radiotherapy implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Proton Beam Therapy Cost in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Looking for Proton Therapy in India? Experience advanced cancer treatment with high precision, lower side effects, and affordable treatment packages.'
    });
  }
}
