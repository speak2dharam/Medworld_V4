import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hernia',
  imports: [SideForm],
  templateUrl: './hernia.html',
  styleUrl: './hernia.css'
})
export class Hernia implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Hernia Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get affordable hernia surgery in India with expert surgeons. Open and laparoscopic options available. Safe procedures, fast recovery. Contact us for details'
    });
  }
}
