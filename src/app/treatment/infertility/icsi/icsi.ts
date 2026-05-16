import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-icsi',
  imports: [SideForm],
  templateUrl: './icsi.html',
  styleUrl: './icsi.css'
})
export class Icsi implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'ICSI Treatment in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced ICSI treatment in India for male infertility. High success rates, expert fertility specialists, personalized care & affordable cost. Enquire today!'
    });
  }
}