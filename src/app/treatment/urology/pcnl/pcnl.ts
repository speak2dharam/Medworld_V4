import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pcnl',
  imports: [SideForm,RouterModule],
  templateUrl: './pcnl.html',
  styleUrl: './pcnl.css'
})
export class Pcnl implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'PCNL Surgery in India '
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'PCNL surgery in India for large kidney stones. Get advanced, minimally invasive treatment by top urologists at affordable cost. Fast recovery. Enquire now!'
    });
  }
}
