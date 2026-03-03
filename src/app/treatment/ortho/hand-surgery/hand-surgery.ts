import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hand-surgery',
  imports: [SideForm],
  templateUrl: './hand-surgery.html',
  styleUrl: './hand-surgery.css'
})
export class HandSurgery implements OnInit {
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Hand Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore hand surgery options for fractures, nerve compression, arthritis, and tendon injuries. Advanced techniques, expert surgeons & complete patient support.'
    });
  }
}
