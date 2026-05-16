import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abdominoplasty',
  imports: [SideForm],
  templateUrl: './abdominoplasty.html',
  styleUrl: './abdominoplasty.css'
})
export class Abdominoplasty implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Abdominoplasty in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe and effective abdominoplasty (tummy tuck) in India to remove excess fat and skin. Experienced surgeons, natural results & quick recovery. Enquire now!'
    });
  }
}