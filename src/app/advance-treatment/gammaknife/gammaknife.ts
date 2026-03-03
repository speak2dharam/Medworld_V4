import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gammaknife',
  imports: [SideForm],
  templateUrl: './gammaknife.html',
  styleUrl: './gammaknife.css'
})
export class Gammaknife implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Best Gamma Knife Radiosurgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Gamma Knife is a safe, non-surgical radiosurgery for brain tumors, AVMs, and trigeminal neuralgia with minimal side effects.'
    });
  }
}
