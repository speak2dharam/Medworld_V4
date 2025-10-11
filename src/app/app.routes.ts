import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
       // canActivate: [authGuard],
        loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
    },
    {
        path: 'hospitals',
        loadChildren: () => import('./hospital/hospital.routes').then(m => m.hospitalRoutes)
    },
    {
        path: 'ip',
        loadChildren: () => import('./ip/ip.routes').then(m => m.ipRoutes)
    },
    {
        path: 'advance-treatments',
        loadChildren: () => import('./advance-treatment/advtreatment.routes').then(m => m.advtreatmentRoutes)
    },
    {
        path: 'treatment',
        loadChildren: () => import('./treatment/reatment.routes').then(m => m.treatmentRoutes)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.routes').then(m => m.hospitalRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
