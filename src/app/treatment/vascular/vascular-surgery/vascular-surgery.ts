import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vascular-surgery',
  imports: [SideForm],
  templateUrl: './vascular-surgery.html',
  styleUrl: './vascular-surgery.css'
})
export class VascularSurgery implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Vascular Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced vascular surgery in India for artery blockages, varicose veins, aneurysms & more. Expert surgeons, minimally invasive care. Enquire with us today'
    });
  }
}
