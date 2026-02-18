import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-indraprastha-apollo-hospital-newdelhi',
  imports: [SideForm],
  templateUrl: './indraprastha-apollo-hospital-newdelhi.html',
  styleUrl: './indraprastha-apollo-hospital-newdelhi.css'
})
export class IndraprasthaApolloHospitalNewdelhi implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Indraprastha Apollo Hospital India – Doctors, Treatments & Cost'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get treatment at Indraprastha Apollo Hospital Delhi with world-class specialists, modern technology, and affordable medical packages for international patients.'
    });
  }
}
