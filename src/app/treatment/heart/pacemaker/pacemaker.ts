import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pacemaker',
  imports: [SideForm],
  templateUrl: './pacemaker.html',
  styleUrl: './pacemaker.css'
})
export class Pacemaker implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Pacemaker Implant Surgery in India: Types, Procedure & Cost'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get expert pacemaker implant surgery in India at affordable prices. Learn about types of pacemakers, how the procedure works, recovery time, and benefits for patients.'
    });
  }
}
