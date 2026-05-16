import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-endovascular-surgery',
  imports: [SideForm],
  templateUrl: './endovascular-surgery.html',
  styleUrl: './endovascular-surgery.css'
})
export class EndovascularSurgery implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Endovascular Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced endovascular surgery in India for aneurysms, stroke, and vascular conditions. Minimally invasive, faster recovery, expert vascular surgeons. Contact now!'
    });
  }
}