import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meniscus-repair',
  imports: [SideForm],
  templateUrl: './meniscus-repair.html',
  styleUrl: './meniscus-repair.css'
})
export class MeniscusRepair implements OnInit {
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Meniscus Repair Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about meniscus repair surgery for torn knee cartilage. Minimally invasive options, faster recovery, and expert orthopedic care with full patient support.'
    });
  }
}