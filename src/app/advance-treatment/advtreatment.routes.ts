// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { DefaultLayout } from '../core/layout/default-layout/default-layout';
import { AdvTreatments } from './adv-treatments/adv-treatments';
import { Hifu } from './hifu/hifu';
import { CyberknifeRobotics } from './cyberknife-robotics/cyberknife-robotics';
import { Novalis } from './novalis/novalis';
import { MriGuided } from './mri-guided/mri-guided';
import { Gammaknife } from './gammaknife/gammaknife';
import { Igrt } from './igrt/igrt';
import { Robotics } from './robotics/robotics';
import { Radiotherapy } from './radiotherapy/radiotherapy';


export const advtreatmentRoutes: Routes = [
  {
    path:'',
    component:DefaultLayout,
    children:[
        {
            path:'',
            component:AdvTreatments
        },
        {path:'high-intensity-frequency-ultrasound-treatment',component:Hifu},
        {path:'cyberknife',component:CyberknifeRobotics},
        {path:'novalis-tx-radiosurgery',component:Novalis},
        {path:'mri-guided-brain-tumor-surgery',component:MriGuided},
        {path:'gamma-knife-radiosurgery',component:Gammaknife},
        {path:'image-guided-radio-therapy',component:Igrt},
        {path:'robotic-surgery',component:Robotics},
        {path:'standard-radiotherapy-and-proton-therapy',component:Radiotherapy},
    ]
  }
];
