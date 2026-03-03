import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ankle-replacement',
  imports: [SideForm],
  templateUrl: './ankle-replacement.html',
  styleUrl: './ankle-replacement.css'
})
export class AnkleReplacement implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Ankle Replacement Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Discover ankle replacement surgery for severe arthritis and joint damage. Regain mobility with expert care, advanced implants & full recovery support.'
    });
  }
}
