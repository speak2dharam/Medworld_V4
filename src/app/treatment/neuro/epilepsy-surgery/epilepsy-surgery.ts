import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-epilepsy-surgery',
  imports: [SideForm],
  templateUrl: './epilepsy-surgery.html',
  styleUrl: './epilepsy-surgery.css'
})
export class EpilepsySurgery implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Epilepsy Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get expert epilepsy surgery in India for drug-resistant seizures. Advanced neurosurgical procedures, high success rate, and affordable cost. Enquire today!'
    });
  }
}
