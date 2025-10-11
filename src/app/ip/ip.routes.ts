// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { ConsultOnline } from './consult-online/consult-online';

export const ipRoutes: Routes = [
  {
    path:'',
    // component:DefaultLayout,
    children:[
        {
            path:'consult-online',
            component:ConsultOnline
        },
        // {path:'about-us',component:AboutUs},
        
    ]
  }
];
