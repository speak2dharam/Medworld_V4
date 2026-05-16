import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyberknife-robotics',

  imports: [SideForm],
  templateUrl: './cyberknife-robotics.html',
  styleUrl: './cyberknife-robotics.css'
})
export class CyberknifeRobotics implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Best CyberKnife Robotic Radiosurgery in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'CyberKnife robotic radiosurgery offers precise, non-invasive cancer treatment with minimal side effects. Get advanced CyberKnife therapy in India.'
    });
  }
}
