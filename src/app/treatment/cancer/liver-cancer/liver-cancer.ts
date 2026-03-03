import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liver-cancer',
  imports: [SideForm],
  templateUrl: './liver-cancer.html',
  styleUrl: './liver-cancer.css'
})
export class LiverCancer implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Liver Cancer | Causes, Symptoms & Treatments'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about liver cancer, its common causes, early symptoms, and advanced treatment options like surgery, ablation, and targeted therapy. Expert care available.'
    });
  }
}
