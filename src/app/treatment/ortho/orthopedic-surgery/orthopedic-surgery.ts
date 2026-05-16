import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orthopedic-surgery',
  imports: [SideForm,RouterModule],
  templateUrl: './orthopedic-surgery.html',
  styleUrl: './orthopedic-surgery.css'
})
export class OrthopedicSurgery implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Orthopaedics & Joint Replacement Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore an overview of orthopaedic surgery, including types like joint replacement, fracture repair, spine surgery & sports injury care. Expert surgical support.'
    });
  }
}