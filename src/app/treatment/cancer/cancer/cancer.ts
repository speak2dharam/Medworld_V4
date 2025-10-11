import { Component } from '@angular/core';
import { SideForm } from '../../../core/layout/side-form/side-form';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancer',
  imports: [SideForm,RouterModule],
  templateUrl: './cancer.html',
  styleUrl: './cancer.css'
})
export class Cancer {

}
