import { Component } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heart',
  imports: [SideForm,RouterModule],
  templateUrl: './heart.html',
  styleUrl: './heart.css'
})
export class Heart {

}
