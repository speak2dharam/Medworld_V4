import { Component } from '@angular/core';
import { TreatmentAll } from '../../treatment/treatment-all/treatment-all';
import { ConsultForm } from '../../core/layout/consult-form/consult-form';

@Component({
  selector: 'app-home-page',
  imports: [TreatmentAll,ConsultForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
