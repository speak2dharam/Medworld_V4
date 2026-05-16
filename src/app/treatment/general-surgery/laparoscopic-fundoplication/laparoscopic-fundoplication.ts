import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-laparoscopic-fundoplication',
  imports: [SideForm],
  templateUrl: './laparoscopic-fundoplication.html',
  styleUrl: './laparoscopic-fundoplication.css'
})
export class LaparoscopicFundoplication  implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Laparoscopic Fundoplication Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get laparoscopic fundoplication surgery in India for GERD and acid reflux. Minimally invasive, quick recovery, top surgeons & affordable packages. Enquire now!'
    });
  }
}