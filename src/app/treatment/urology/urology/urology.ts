import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-urology',
  imports: [SideForm,RouterModule],
  templateUrl: './urology.html',
  styleUrl: './urology.css'
})
export class Urology implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Urology Treatment in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced urology treatment in India for kidney, bladder & prostate issues. Expert doctors, modern care & affordable cost for international patients.'
    });
  }
}