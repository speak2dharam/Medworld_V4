import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bone-cancer',
  imports: [SideForm],
  templateUrl: './bone-cancer.html',
  styleUrl: './bone-cancer.css'
})
export class BoneCancer implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Bone Cancer Treatment Options'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced bone cancer treatment in India—surgery, chemotherapy & targeted therapy at top hospitals with experienced specialists and full patient support.'
    });
  }
}
