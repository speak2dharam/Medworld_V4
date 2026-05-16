import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kyphoplasty',
  imports: [SideForm],
  templateUrl: './kyphoplasty.html',
  styleUrl: './kyphoplasty.css'
})
export class Kyphoplasty implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Kyphoplasty Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore kyphoplasty surgery options to treat spinal compression fractures. Minimally invasive, quick recovery, and expert spine care with full support.'
    });
  }
}