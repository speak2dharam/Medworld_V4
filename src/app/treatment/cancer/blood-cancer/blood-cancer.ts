import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blood-cancer',
  imports: [SideForm],
  templateUrl: './blood-cancer.html',
  styleUrl: './blood-cancer.css'
})
export class BloodCancer implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Blood Cancer Treatment in Delhi, India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get affordable blood cancer treatment in India with MedWorldIndia. Connect with top hospitals, expert doctors, and complete medical tourism support.'
    });
  }
}
