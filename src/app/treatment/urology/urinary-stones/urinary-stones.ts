import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-urinary-stones',
  imports: [SideForm],
  templateUrl: './urinary-stones.html',
  styleUrl: './urinary-stones.css'
})
export class UrinaryStones implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Urinary Stones Treatment in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced treatment for urinary stones in India. Options include laser surgery, PCNL, and non-invasive methods by top urologists. Quick recovery. Contact now!'
    });
  }
}