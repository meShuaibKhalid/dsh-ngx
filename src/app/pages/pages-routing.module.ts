import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { GeneralInformationComponent } from '../components/general-information/general-information.component';
import { LabComponent } from '../components/lab/lab.component';
import { ImpairmentsComponent } from '../components/impairments/impairments.component';
import { MedicationsComponent } from '../components/medications/medications.component';
import { TroubleshootingComponent } from '../components/troubleshooting/troubleshooting.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { PredictionsComponent } from '../components/predictions/predictions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'predictions',
      component: ECommerceComponent,
    },
    {
      path: 'general-information',
      component: GeneralInformationComponent,
    },
    {
      path: 'lab',
      component: LabComponent,
    },
    {
      path: 'impairments',
      component: ImpairmentsComponent,
    },
    {
      path: 'medications',
      component: MedicationsComponent,
    },
    {
      path: 'troubleshooting',
      component: TroubleshootingComponent,
    },
    {
      path: 'clients',
      component: ClientsComponent,
    },
    {
      path: 'troubleshooting',
      component: PredictionsComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
