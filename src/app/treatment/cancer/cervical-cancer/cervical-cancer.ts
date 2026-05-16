import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cervical-cancer',
  imports: [SideForm],
  templateUrl: './cervical-cancer.html',
  styleUrl: './cervical-cancer.css'
})
export class CervicalCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Cervical Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Cervical cancer treatment in India includes surgery, chemotherapy, and radiation—offered at top hospitals with expert care and full patient support.'
    });
  }
}