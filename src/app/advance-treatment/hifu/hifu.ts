import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hifu',

  imports: [SideForm],
  templateUrl: './hifu.html',
  styleUrl: './hifu.css'
})
export class Hifu implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'HIFU for Prostate Cancer - Safe & Non-Invasive Treatment'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced HIFU treatment for prostate cancer in India. A non-surgical, precise therapy with fewer side effects and faster recovery.'
    });
  }
}
