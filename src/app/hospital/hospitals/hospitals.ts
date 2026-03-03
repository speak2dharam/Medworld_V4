import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hospitals',
  imports: [SideForm,RouterModule],
  templateUrl: './hospitals.html',
  styleUrl: './hospitals.css'
})
export class Hospitals implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Best Multi-Specialty Hospitals in India for Global Patients'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get treated at top hospitals in India known for high success rates, advanced technology, and cost-effective medical care.'
    });
  }
}
