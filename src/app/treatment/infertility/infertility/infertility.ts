import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infertility',
  imports: [SideForm,RouterModule],
  templateUrl: './infertility.html',
  styleUrl: './infertility.css'
})
export class Infertility implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Infertility Treatment in India: IVF, IUI & Fertility Care'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get expert infertility treatment in India including IVF, IUI, ICSI & more. Advanced fertility clinics, experienced specialists & high success rates. Enquire now!'
    });
  }
}