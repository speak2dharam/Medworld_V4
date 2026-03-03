import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liver-treansplant',
  imports: [SideForm],
  templateUrl: './liver-treansplant.html',
  styleUrl: './liver-treansplant.css'
})
export class LiverTreansplant implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Liver Transplant in India: Cost, Procedure & Recovery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Looking for liver transplant in India? Discover treatment options, cost, success rate, and expert care at leading hospitals.'
    });
  }
}
