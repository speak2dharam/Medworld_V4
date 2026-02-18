import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disc-nucleoplasty',
  imports: [SideForm],
  templateUrl: './disc-nucleoplasty.html',
  styleUrl: './disc-nucleoplasty.css'
})
export class DiscNucleoplasty implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Disc Nucleoplasty Surgery | Minimally Invasive Spine Care'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about cervical discectomy—a surgical procedure to relieve neck pain and nerve compression. Performed by expert spine surgeons with full patient support.'
    });
  }
}
