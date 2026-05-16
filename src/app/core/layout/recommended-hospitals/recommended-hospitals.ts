import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommended-hospitals',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recommended-hospitals.html',
  styleUrl: './recommended-hospitals.css'
})
export class RecommendedHospitals {}
