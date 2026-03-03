import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-robotic-surgery',
  imports: [SideForm],
  templateUrl: './robotic-surgery.html',
  styleUrl: './robotic-surgery.css'
})
export class RoboticSurgery implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Robotic Surgery: Cost, Procedure & Recovery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Affordable robotic surgery in India with top hospitals and specialists. Learn benefits, cost, and recovery for advanced treatment.'
    });
  }
}
