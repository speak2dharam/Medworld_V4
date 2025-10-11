import { Component } from '@angular/core';
import { SideForm } from '../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  imports: [SideForm,RouterModule],
  templateUrl: './hospitals.html',
  styleUrl: './hospitals.css'
})
export class Hospitals {

}
