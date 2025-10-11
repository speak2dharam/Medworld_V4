import { Component } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cosmetic',
  imports: [SideForm,RouterModule],
  templateUrl: './cosmetic.html',
  styleUrl: './cosmetic.css'
})
export class Cosmetic {

}
