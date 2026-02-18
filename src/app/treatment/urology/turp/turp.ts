import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-turp',
  imports: [SideForm],
  templateUrl: './turp.html',
  styleUrl: './turp.css'
})
export class Turp implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'TURP Procedure for Prostate: Cost & Treatment in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Looking for TURP surgery in India? Learn about cost, procedure, recovery, and expert treatment for enlarged prostate (BPH).'
    });
  }
}
