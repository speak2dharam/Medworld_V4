import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liposuction',
  imports: [SideForm],
  templateUrl: './liposuction.html',
  styleUrl: './liposuction.css'
})
export class Liposuction implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Liposuction in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get liposuction in India to remove stubborn fat and reshape your body. Safe, effective, and affordable treatment by skilled plastic surgeons. Enquire now.'
    });
  }
}
