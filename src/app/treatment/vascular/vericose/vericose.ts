import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vericose',
  imports: [SideForm],
  templateUrl: './vericose.html',
  styleUrl: './vericose.css'
})
export class Vericose implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Varicose Veins Treatment in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get effective varicose veins treatment in India with laser therapy or surgery. Experienced vascular specialists, minimally invasive & affordable care. Enquire now'
    });
  }
}