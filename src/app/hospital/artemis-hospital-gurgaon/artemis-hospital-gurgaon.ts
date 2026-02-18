import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-artemis-hospital-gurgaon',
  imports: [SideForm],
  templateUrl: './artemis-hospital-gurgaon.html',
  styleUrl: './artemis-hospital-gurgaon.css'
})
export class ArtemisHospitalGurgaon implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Artemis Hospital'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Artemis Hospital Gurugram is a top healthcare destination in India offering affordable, advanced treatments for global patients.'
    });
  }
}
