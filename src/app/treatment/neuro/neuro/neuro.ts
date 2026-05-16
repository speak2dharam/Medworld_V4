import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-neuro',
  imports: [SideForm,RouterModule],
  templateUrl: './neuro.html',
  styleUrl: './neuro.css'
})
export class Neuro implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Neurosurgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Top neurosurgeons in India offer advanced brain and spine surgery for tumors, trauma, stroke, and more. World-class care at affordable cost. Enquire today!'
    });
  }
}