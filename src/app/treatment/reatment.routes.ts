// src/app/features/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { DefaultLayout } from '../core/layout/default-layout/default-layout';
import { Treatments } from './treatments/treatments';
import { Cancer } from './cancer/cancer/cancer';
import { ProstateCancer } from './cancer/prostate-cancer/prostate-cancer';
import { CervicalCancer } from './cancer/cervical-cancer/cervical-cancer';
import { OralCancer } from './cancer/oral-cancer/oral-cancer';
import { BoneCancer } from './cancer/bone-cancer/bone-cancer';
import { BloodCancer } from './cancer/blood-cancer/blood-cancer';
import { StomachCancer } from './cancer/stomach-cancer/stomach-cancer';
import { LiverCancer } from './cancer/liver-cancer/liver-cancer';
import { LungCancer } from './cancer/lung-cancer/lung-cancer';
import { BreastCancer } from './cancer/breast-cancer/breast-cancer';
import { BrainCancer } from './cancer/brain-cancer/brain-cancer';
import { ColonCancer } from './cancer/colon-cancer/colon-cancer';
import { HeadNeckCancer } from './cancer/head-neck-cancer/head-neck-cancer';
import { Cosmetic } from './cosmetic/cosmetic/cosmetic';
import { Abdominoplasty } from './cosmetic/abdominoplasty/abdominoplasty';
import { BreastAugmentation } from './cosmetic/breast-augmentation/breast-augmentation';
import { BreastReduction } from './cosmetic/breast-reduction/breast-reduction';
import { CosmeticRhinoplasty } from './cosmetic/cosmetic-rhinoplasty/cosmetic-rhinoplasty';
import { FaceLiftSurgery } from './cosmetic/face-lift-surgery/face-lift-surgery';
import { Liposuction } from './cosmetic/liposuction/liposuction';
import { GeneralSurgery } from './general-surgery/general-surgery/general-surgery';
import { Hernia } from './general-surgery/hernia/hernia';
import { Thyroidectomy } from './general-surgery/thyroidectomy/thyroidectomy';
import { LaparoscopicMyomectomy } from './general-surgery/laparoscopic-myomectomy/laparoscopic-myomectomy';
import { LaparoscopicFundoplication } from './general-surgery/laparoscopic-fundoplication/laparoscopic-fundoplication';
import { Heart } from './heart/heart/heart';
import { Angioplasty } from './heart/angioplasty/angioplasty';
import { CardiacSurgery } from './heart/cardiac-surgery/cardiac-surgery';
import { HeartValve } from './heart/heart-valve/heart-valve';
import { Pacemaker } from './heart/pacemaker/pacemaker';
import { PediatricCardiac } from './heart/pediatric-cardiac/pediatric-cardiac';
import { RoboticHeart } from './heart/robotic-heart/robotic-heart';
import { Infertility } from './infertility/infertility/infertility';
import { Ivf } from './infertility/ivf/ivf';
import { Icsi } from './infertility/icsi/icsi';
import { Neuro } from './neuro/neuro/neuro';
import { DeepBrainStimulation } from './neuro/deep-brain-stimulation/deep-brain-stimulation';
import { EndovascularSurgery } from './neuro/endovascular-surgery/endovascular-surgery';
import { EpilepsySurgery } from './neuro/epilepsy-surgery/epilepsy-surgery';
import { OrthopedicSurgery } from './ortho/orthopedic-surgery/orthopedic-surgery';
import { AnkleReplacement } from './ortho/ankle-replacement/ankle-replacement';
import { MeniscusRepair } from './ortho/meniscus-repair/meniscus-repair';
import { CarpalTunnel } from './ortho/carpal-tunnel/carpal-tunnel';
import { ElbowJoint } from './ortho/elbow-joint/elbow-joint';
import { HandSurgery } from './ortho/hand-surgery/hand-surgery';
import { HipReplacement } from './ortho/hip-replacement/hip-replacement';
import { KneeReplacement } from './ortho/knee-replacement/knee-replacement';
import { Spine } from './spine/spine/spine';
import { CervicalDiscectomy } from './spine/cervical-discectomy/cervical-discectomy';
import { DiscNucleoplasty } from './spine/disc-nucleoplasty/disc-nucleoplasty';
import { Kyphoplasty } from './spine/kyphoplasty/kyphoplasty';
import { SpinalTumor } from './spine/spinal-tumor/spinal-tumor';
import { Transplant } from './transplant/transplant/transplant';
import { Bmt } from './transplant/bmt/bmt';
import { KidneyTransplant } from './transplant/kidney-transplant/kidney-transplant';
import { LiverTreansplant } from './transplant/liver-treansplant/liver-treansplant';
import { Urology } from './urology/urology/urology';
import { Pcnl } from './urology/pcnl/pcnl';
import { RadicalProstatectomy } from './urology/radical-prostatectomy/radical-prostatectomy';
import { RoboticSurgery } from './urology/robotic-surgery/robotic-surgery';
import { Turp } from './urology/turp/turp';
import { UrinaryStones } from './urology/urinary-stones/urinary-stones';
import { Vascular } from './vascular/vascular/vascular';
import { VascularSurgery } from './vascular/vascular-surgery/vascular-surgery';
import { Vericose } from './vascular/vericose/vericose';
import { Weightloss } from './weightloss/weightloss/weightloss';



export const treatmentRoutes: Routes = [
  {
    path:'',
    component:DefaultLayout,
    children:[
        {
            path:'',
            component:Treatments
        },
        {path: 'cancer-treatment-in-India', component: Cancer},
        {path: 'prostate-cancer-treatment-in-India', component: ProstateCancer},
        {path: 'cervical-cancer-treatment', component: CervicalCancer},
        {path: 'oral-cancer-treatment', component: OralCancer},
        {path: 'bone-cancer-treatment', component: BoneCancer},
        {path: 'leukemia-blood-cancer-treatment', component: BloodCancer},
        {path: 'stomach-cancer-treatment', component: StomachCancer},
        {path: 'liver-cancer-treatment', component: LiverCancer},
        {path: 'lung-cancer-treatment', component: LungCancer},
        {path: 'breast-cancer-treatment', component: BreastCancer},
        {path: 'brain-cancer-treatment', component: BrainCancer},
        {path: 'colon-cancer-treatment', component: ColonCancer},
        {path: 'head-neck-cancer-treatment', component: HeadNeckCancer},

        {path: 'spine-surgery-in-India', component: Spine},
        {path: 'cervical-discectomy-spine-treatment', component: CervicalDiscectomy},
        {path: 'disc-nucleoplasty-surgery', component: DiscNucleoplasty},
        {path: 'kyphoplasty-surgery', component: Kyphoplasty},
        {path: 'surgery-for-spinal-tumor', component: SpinalTumor},

        {path: 'orthopedic-surgery-in-India', component: OrthopedicSurgery},
        {path: 'ankle-replacement-in-India', component: AnkleReplacement},
        {path: 'meniscus-repair-surgery-in-India', component: MeniscusRepair},
        {path: 'carpal-tunnel-treatment-in-India', component: CarpalTunnel},
        {path: 'elbow-replacement-in-India', component: ElbowJoint},
        {path: 'hand-surgery-in-India', component: HandSurgery},
        {path: 'hip-replacement-in-India', component: HipReplacement},
        {path: 'knee-replacement-in-India', component: KneeReplacement},

        {path: 'heart-treatment-in-India', component: Heart},
        {path: 'angioplasty-in-india', component: Angioplasty},
        {path: 'cardiac-surgery-in-india', component: CardiacSurgery},
        {path: 'heart-valve-replacement-in-india', component: HeartValve},
        {path: 'pacemaker-in-india', component: Pacemaker},
        {path: 'pediatric-cardiac-surgery', component: PediatricCardiac},
        {path: 'robotic-heart-surgery-in-india', component: RoboticHeart},

        {path: 'urology-treatment-in-India', component: Urology},
        {path: 'pcnl-in-india', component: Pcnl},
        {path: 'radical-prostatectomy-in-India', component:RadicalProstatectomy },
        {path: 'robotic-prostatectomy-in-India', component:RoboticSurgery},
        {path: 'tURP-in-India', component:Turp},
        {path: 'urinary-stones-in-India', component:UrinaryStones},


        {path: 'genral-surgery-in-India', component: GeneralSurgery},
        {path: 'hernia-in-India', component: Hernia},
        {path: 'thyroidectomy -in-India', component: Thyroidectomy},
        {path: 'laparoscopic-myomectomy-in-India', component: LaparoscopicMyomectomy},
        {path: 'laparoscopic-fundoplication-surgery-in-India', component: LaparoscopicFundoplication},

        {path: 'neurosurgery-in-India', component: Neuro},
        {path: 'deep-brain-stimulation-in-India', component: DeepBrainStimulation},
        {path: 'endovascular-surgery-in-India', component: EndovascularSurgery},
        {path: 'epilepsy-surgery-in-India', component: EpilepsySurgery},

        {path: 'transplant-in-India', component: Transplant},
        {path: 'bmt-in-India', component: Bmt},
        {path: 'Kidney-transplant-in-India', component: KidneyTransplant},
        {path: 'Liver-Transplant-in-India', component: LiverTreansplant},


        {path: 'vascular-surgery-in-India', component: Vascular},
        {path: 'vascular-surgery-treatment', component: VascularSurgery},
        {path: 'varicose-veins-treatment', component: Vericose},

        {path: 'infertility-treatment-in-India', component: Infertility},
        {path: 'IVF-treatment-in-India', component: Ivf},
        {path: 'ICSI-treatment-in-India', component: Icsi},

        // {path: 'health-checkup-in-India', component: HealthCheckupComponent},

        {path: 'cosmetic-surgery-in-India', component: Cosmetic},
        {path: 'Abdominoplasty-in-India', component: Abdominoplasty},
        {path: 'breast-augmentation-in-India', component: BreastAugmentation},
        {path: 'breast-reduction-in-India', component: BreastReduction},
        {path: 'cosmetic-rhinoplasty-in-India', component: CosmeticRhinoplasty},
        {path: 'face-Lift-Surgery-in-India', component: FaceLiftSurgery},
        {path: 'liposuction-in-India', component: Liposuction},


        {path: 'weight-loss-surgery-in-India', component: Weightloss}
    ]
  }
];
