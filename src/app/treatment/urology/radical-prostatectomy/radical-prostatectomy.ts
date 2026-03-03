import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-radical-prostatectomy',
  imports: [SideForm],
  templateUrl: './radical-prostatectomy.html',
  styleUrl: './radical-prostatectomy.css'
})
export class RadicalProstatectomy implements OnInit {
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Radical Prostatectomy in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Radical prostatectomy in India by top urologists. Robotic & laparoscopic surgery for prostate cancer with advanced care and quick recovery.'
    });
  }
}
