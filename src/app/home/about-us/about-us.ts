import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [SideForm],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'About Medworldindia'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'We help international patients access top hospitals in India, offering quality care, expert doctors, and end-to-end support.'
    });
  }
}
