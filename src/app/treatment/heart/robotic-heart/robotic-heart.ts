import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-robotic-heart',
  imports: [SideForm],
  templateUrl: './robotic-heart.html',
  styleUrl: './robotic-heart.css'
})
export class RoboticHeart implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Robotic Heart Surgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        '"Discover advanced robotic heart surgery in India. Get precise, minimally invasive treatment with faster recovery, less pain & expert cardiac surgeons.'
    });
  }
}