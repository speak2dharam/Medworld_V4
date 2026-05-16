import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-knee-replacement',
  imports: [SideForm],
  templateUrl: './knee-replacement.html',
  styleUrl: './knee-replacement.css'
})
export class KneeReplacement implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Knee Replacement Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Discover knee replacement surgery for arthritis and joint damage. Options include total and partial knee replacement with expert care and faster recovery.'
    });
  }
}