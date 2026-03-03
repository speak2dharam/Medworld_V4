import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deep-brain-stimulation',
  imports: [SideForm],
  templateUrl: './deep-brain-stimulation.html',
  styleUrl: './deep-brain-stimulation.css'
})
export class DeepBrainStimulation implements OnInit{
constructor(private titleService: Title, private metaService: Meta, ) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Deep Brain Stimulation in India'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Affordable Deep Brain Stimulation (DBS) surgery in India for Parkinson’s, tremors & dystonia. Advanced care by expert neurosurgeons. Book a consultation now!'
    });
  }
}
