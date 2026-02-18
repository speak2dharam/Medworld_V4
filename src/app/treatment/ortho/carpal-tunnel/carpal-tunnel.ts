import { Component, OnInit } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carpal-tunnel',
  imports: [SideForm],
  templateUrl: './carpal-tunnel.html',
  styleUrl: './carpal-tunnel.css'
})
export class CarpalTunnel implements OnInit{
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
      // META TITLE
    this.titleService.setTitle(
      'Carpal Tunnel Release Surgery'
    );

    // META DESCRIPTION
    this.metaService.updateTag({
      name: 'description',
      content:
        'Relieve hand pain and numbness with carpal tunnel release surgery. Minimally invasive options, quick recovery, and expert orthopedic care with full support.'
    });
  }
}
