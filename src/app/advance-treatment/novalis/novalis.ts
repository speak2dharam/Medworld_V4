import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-novalis',

  imports: [SideForm],
  templateUrl: './novalis.html',
  styleUrl: './novalis.css'
})
export class Novalis implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Novalis Tx Treatment in India- Advanced Radiosurgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Novalis Tx radiosurgery delivers highly precise, non-invasive radiation for brain and spine tumors. Get advanced Novalis Tx treatment in India.'
    });
  }
}
