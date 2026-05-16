import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spinal-tumor',
  imports: [SideForm],
  templateUrl: './spinal-tumor.html',
  styleUrl: './spinal-tumor.css'
})
export class SpinalTumor implements OnInit {
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Spinal cord tumor - Diagnosis and treatment'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn how spinal cord tumors are diagnosed and treated. Explore surgical, radiation, and targeted therapy options with expert care and full patient support.'
    });
  }
}