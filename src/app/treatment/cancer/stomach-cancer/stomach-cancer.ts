import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stomach-cancer',
  imports: [SideForm],
  templateUrl: './stomach-cancer.html',
  styleUrl: './stomach-cancer.css'
})
export class StomachCancer implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Stomach Cancer: Symptoms, Diagnosis & Treatment'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Understand stomach cancer symptoms, diagnosis methods, and treatment options including surgery, chemotherapy, and targeted therapy. Expert care & support.'
    });
  }
}