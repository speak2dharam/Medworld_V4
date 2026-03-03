import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breast-cancer',
  imports: [SideForm],
  templateUrl: './breast-cancer.html',
  styleUrl: './breast-cancer.css'
})
export class BreastCancer implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Breast Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Discover breast cancer treatments including surgery, chemotherapy, radiation, hormone therapy & more. Personalized care by expert oncologists with full support.'
    });
  }
}
