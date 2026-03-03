import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../core/layout/contact-form/contact-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  imports: [ContactForm],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements OnInit{
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Contact Us'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Contact MedWorldIndia for expert medical guidance, hospital coordination, and complete support for treatment in India.'
    });
  }
}
