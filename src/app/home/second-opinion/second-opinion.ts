import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-second-opinion',
  imports: [SideForm],
  templateUrl: './second-opinion.html',
  styleUrl: './second-opinion.css'
})
export class SecondOpinion implements OnInit{
   constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Second Medical Opinion in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get a trusted second medical opinion from top doctors in India for accurate diagnosis, treatment clarity, and peace of mind.'
    });
  }
}
