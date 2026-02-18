import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-general-surgery',
  imports: [SideForm,RouterModule],
  templateUrl: './general-surgery.html',
  styleUrl: './general-surgery.css'
})
export class GeneralSurgery implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'General Surgery in India | Top Surgeons & Hospitals'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get world-class general surgery in India by experienced surgeons at top hospitals. Safe procedures, affordable cost, and fast recovery. Enquire with us today!'
    });
  }
}
