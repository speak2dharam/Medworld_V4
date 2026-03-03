import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-heart',
  imports: [SideForm,RouterModule],
  templateUrl: './heart.html',
  styleUrl: './heart.css'
})
export class Heart implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Heart Surgery – Types, Procedure, Recovery & Risks'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get expert heart surgery in India from top cardiac surgeons. Affordable treatment, high success rate & world-class hospitals. Send your reports for evaluation.'
    });
  }
}
