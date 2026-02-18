import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brain-cancer',
  imports: [SideForm],
  templateUrl: './brain-cancer.html',
  styleUrl: './brain-cancer.css'
})
export class BrainCancer implements OnInit  {
 constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Brain Cancer | Causes, Symptoms & Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about brain cancer causes, warning signs, diagnosis, and treatment options like surgery, radiation, and targeted therapy. Expert neuro-oncology care.'
    });
  }
}
