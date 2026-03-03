import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-robotics',
  imports: [SideForm],
  templateUrl: './robotics.html',
  styleUrl: './robotics.css'
})
export class Robotics implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Robotic Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Robotic surgery in India offers precise, minimally invasive treatment for prostate cancer, kidney tumors, ureteric & bladder cancer.'
    });
  }
}
