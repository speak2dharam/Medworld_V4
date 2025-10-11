import { Routes } from "@angular/router";
import { DefaultLayout } from "../core/layout/default-layout/default-layout";
import { Hospitals } from "./hospitals/hospitals";
import { MedantaMedicityGurgaon } from "./medanta-medicity-gurgaon/medanta-medicity-gurgaon";
import { ArtemisHospitalGurgaon } from "./artemis-hospital-gurgaon/artemis-hospital-gurgaon";
import { IndraprasthaApolloHospitalNewdelhi } from "./indraprastha-apollo-hospital-newdelhi/indraprastha-apollo-hospital-newdelhi";
import { BlkHospitalNewdelhi } from "./blk-hospital-newdelhi/blk-hospital-newdelhi";
import { MaxsuperspecialityHospitalSaketNewdelhi } from "./maxsuperspeciality-hospital-saket-newdelhi/maxsuperspeciality-hospital-saket-newdelhi";
import { FortismemorialresearchInstituteGurgaon } from "./fortismemorialresearch-institute-gurgaon/fortismemorialresearch-institute-gurgaon";

export const hospitalRoutes: Routes = [
  {
    path:'',
    component:DefaultLayout,
    children:[
        {
            path:'',
            component:Hospitals
        },
        {path:'medanta-medicity-gurgaon',component:MedantaMedicityGurgaon},
        {path:'artemis-hospital-gurgaon',component:ArtemisHospitalGurgaon},
        {path:'indraprastha-apollo-hospital-new-delhi',component:IndraprasthaApolloHospitalNewdelhi},
        {path:'blk-hospital-new-delhi',component:BlkHospitalNewdelhi},
        {path:'max-super-speciality-hospital-saket-new-delhi',component:MaxsuperspecialityHospitalSaketNewdelhi},
        {path:'fortis-memorial-research-institute-gurgaon',component:FortismemorialresearchInstituteGurgaon},
    ]
  }
];