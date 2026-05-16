import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prostate-cancer',
  imports: [SideForm],
  templateUrl: './prostate-cancer.html',
  styleUrl: './prostate-cancer.css'
})
export class ProstateCancer implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Prostate Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced prostate cancer treatment in India—surgery, radiation, hormone therapy & more. Expert care, top hospitals & 24/7 patient support.'
    });
  }
}