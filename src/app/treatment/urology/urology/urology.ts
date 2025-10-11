import { Component } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-urology',
  imports: [SideForm,RouterModule],
  templateUrl: './urology.html',
  styleUrl: './urology.css'
})
export class Urology {

}
