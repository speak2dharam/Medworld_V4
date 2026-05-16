import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breast-reduction',
  imports: [SideForm],
  templateUrl: './breast-reduction.html',
  styleUrl: './breast-reduction.css'
})
export class BreastReduction implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Breast Reduction Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe and effective breast reduction in India to relieve back pain and improve body contour. Expert plastic surgeons & natural-looking results. Enquire now!'
    });
  }
}