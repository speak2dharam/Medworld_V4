import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-colon-cancer',
  imports: [SideForm],
  templateUrl: './colon-cancer.html',
  styleUrl: './colon-cancer.css'
})
export class ColonCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Colon Cancer: Symptoms, Stages & Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about colon cancer symptoms, stages, and treatment options including surgery, chemotherapy, and targeted therapy. Early detection & expert care matter.'
    });
  }
}
