// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { DefaultLayout } from '../core/layout/default-layout/default-layout';
import { HomePage } from './home-page/home-page';
import { SecondOpinion } from './second-opinion/second-opinion';
import { WhyIndia } from './why-india/why-india';
import { OurServices } from './our-services/our-services';
import { Faq } from './faq/faq';
import { ContactUs } from './contact-us/contact-us';
import { AboutUs } from './about-us/about-us';
import { Gallery } from './gallery/gallery';

export const homeRoutes: Routes = [
  {
    path:'',
    component:DefaultLayout,
    children:[
        {
            path:'',
            component:HomePage
        },
        {path:'about-us',component:AboutUs},
        {path:'second-opinion',component:SecondOpinion},
        {path:'why-india',component:WhyIndia},
        {path:'our-services',component:OurServices},
        {path:'faq',component:Faq},
        {path:'contact-us',component:ContactUs},
        { path: 'gallery', redirectTo: 'gallery/1', pathMatch: 'full' },
        { path: 'gallery/:page', component: Gallery },
    ]
  }
];
