import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vascular',
  imports: [SideForm,RouterModule],
  templateUrl: './vascular.html',
  styleUrl: './vascular.css'
})
export class Vascular implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Vascular Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Top vascular surgeons in India offer treatment for varicose veins, aneurysms & artery blockages. Minimally invasive options & affordable care. Enquire today!'
    });
  }
}