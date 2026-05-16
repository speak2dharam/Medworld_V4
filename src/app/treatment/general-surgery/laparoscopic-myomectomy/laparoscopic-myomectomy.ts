import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-laparoscopic-myomectomy',
  imports: [SideForm],
  templateUrl: './laparoscopic-myomectomy.html',
  styleUrl: './laparoscopic-myomectomy.css'
})
export class LaparoscopicMyomectomy implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Laparoscopic Myomectomy in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Get laparoscopic myomectomy in India for safe and effective fibroid removal. Minimally invasive surgery, expert gynecologists, quick recovery. Enquire now!'
    });
  }
}