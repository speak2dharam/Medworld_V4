import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pediatric-cardiac',
  imports: [SideForm],
  templateUrl: './pediatric-cardiac.html',
  styleUrl: './pediatric-cardiac.css'
})
export class PediatricCardiac implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Pediatric Cardiac Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Expert pediatric cardiac surgery for congenital heart defects in children. Advanced treatment, experienced surgeons, and affordable care in top Indian hospitals.'
    });
  }
}
