import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ivf',
  imports: [SideForm],
  templateUrl: './ivf.html',
  styleUrl: './ivf.css'
})
export class Ivf implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'IVF Treatment in India: Advanced Fertility Solutions'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get advanced IVF treatment in India with high success rates. Expert fertility specialists, personalized care, and affordable packages. Start your journey today!'
    });
  }
}
