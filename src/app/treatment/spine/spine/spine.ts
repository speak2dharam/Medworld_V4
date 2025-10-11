import { Component } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spine',
  imports: [SideForm,RouterModule],
  templateUrl: './spine.html',
  styleUrl: './spine.css'
})
export class Spine {

}
