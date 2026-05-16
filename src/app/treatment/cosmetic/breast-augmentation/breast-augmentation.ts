import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breast-augmentation',
  imports: [SideForm],
  templateUrl: './breast-augmentation.html',
  styleUrl: './breast-augmentation.css'
})
export class BreastAugmentation implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Breast Augmentation in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe and effective breast augmentation in India to enhance size, shape, and symmetry. Performed by skilled plastic surgeons. Natural results. Enquire today!'
    });
  }
}