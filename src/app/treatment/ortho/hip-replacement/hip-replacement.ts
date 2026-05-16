import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hip-replacement',
  imports: [SideForm],
  templateUrl: './hip-replacement.html',
  styleUrl: './hip-replacement.css'
})
export class HipReplacement implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Hip Replacement Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore hip replacement surgery options for arthritis and joint damage. Advanced implants, minimally invasive techniques & expert orthopedic care.'
    });
  }
}