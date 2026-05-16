import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-heart-valve',
  imports: [SideForm],
  templateUrl: './heart-valve.html',
  styleUrl: './heart-valve.css'
})
export class HeartValve implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Heart Valve Replacement Surgery: Procedure, Types & Benefits'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Experience world-class cardiac surgery in India with top heart hospitals, robotic and minimally invasive techniques, high success rates & cost savings for international patients.'
    });
  }
}