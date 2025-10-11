import { Routes } from "@angular/router";
import { DefaultLayout } from "../core/layout/default-layout/default-layout";
import { Gallery1 } from "./gallery1/gallery1";
import { Gallery2 } from "./gallery2/gallery2";

export const hospitalRoutes: Routes = [
  {
    path:'',
    component:DefaultLayout,
    children:[
        {
            path:'',
            component:Gallery1
        },
        {path:'gallery-2',component:Gallery2},
    ]
  }
];