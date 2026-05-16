import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bmt',
  imports: [SideForm],
  templateUrl: './bmt.html',
  styleUrl: './bmt.css'
})
export class Bmt implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Bone Marrow Transplant in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Affordable bone marrow transplant in India for leukemia, lymphoma, and other blood disorders. Expert hematologists, advanced BMT centers. Enquire now!'
    });
  }
}