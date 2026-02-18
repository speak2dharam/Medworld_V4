import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kidney-transplant',
  imports: [SideForm],
  templateUrl: './kidney-transplant.html',
  styleUrl: './kidney-transplant.css'
})
export class KidneyTransplant implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Kidney Transplant in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get successful kidney transplant in India by top nephrologists at advanced hospitals. High success rate, affordable packages & quick recovery. Enquire now'
    });
  }
}
