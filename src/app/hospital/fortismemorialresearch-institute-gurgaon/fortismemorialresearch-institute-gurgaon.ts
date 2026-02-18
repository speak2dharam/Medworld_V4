import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fortismemorialresearch-institute-gurgaon',
  imports: [SideForm],
  templateUrl: './fortismemorialresearch-institute-gurgaon.html',
  styleUrl: './fortismemorialresearch-institute-gurgaon.css'
})
export class FortismemorialresearchInstituteGurgaon implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Fortis Hospital'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Fortis Hospital provides world-class healthcare with experienced specialists, advanced infrastructure, and high success rates.'
    });
  }
}
