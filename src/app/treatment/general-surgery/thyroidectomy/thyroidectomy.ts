import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thyroidectomy',
  imports: [SideForm],
  templateUrl: './thyroidectomy.html',
  styleUrl: './thyroidectomy.css'
})
export class Thyroidectomy implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Thyroidectomy Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get safe and advanced thyroidectomy surgery in India for thyroid nodules, goiter, or cancer. Experienced surgeons, affordable cost, fast recovery. Contact now!'
    });
  }
}