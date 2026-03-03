import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-elbow-joint',
  imports: [SideForm],
  templateUrl: './elbow-joint.html',
  styleUrl: './elbow-joint.css'
})
export class ElbowJoint implements OnInit {
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Elbow Joint replacement surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Learn about elbow joint replacement surgery for severe arthritis or injury. Restore movement with expert orthopedic care, advanced implants & full support.'
    });
  }
}
