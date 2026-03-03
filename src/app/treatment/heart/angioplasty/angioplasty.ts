import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angioplasty',
  imports: [SideForm],
  templateUrl: './angioplasty.html',
  styleUrl: './angioplasty.css'
})
export class Angioplasty implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Angioplasty – Procedure, Types, Recovery & Benefits'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Discover how angioplasty restores blood flow to the heart. Understand the procedure, types (balloon, stent), recovery process, and what to expect after treatment.'
    });
  }
}
