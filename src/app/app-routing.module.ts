import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LabTabComponent } from './home/lab-tab/lab-tab.component'
import { DetialComponent } from './ble/detial/detial.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/ble',
    pathMatch: 'full'
  },
  {path: 'home',loadChildren: './home/home.module#HomePageModule'},
  {path: 'ble-detail',component: DetialComponent},
  {path: 'list',loadChildren: './list/list.module#ListPageModule'},
  { path: 'contrl', loadChildren: './contrl/contrl.module#ContrlPageModule' },
  { path: 'collect', loadChildren: './collect/collect.module#CollectPageModule' },
  { path: 'water-collect', loadChildren: './water-collect/collect.module#CollectPageModule' },
  { path: 'alarm', loadChildren: './alarm/alarm.module#AlarmPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'water-history', loadChildren: './water-history/water-history.module#HistoryPageModule' },
  { path: 'time', loadChildren: './history/time/time.module#TimePageModule' },
  { path: 'water-history-time', loadChildren: './water-history/time/time.module#TimePageModule' },
  { path: 'contrl-time', loadChildren: './contrl-time/contrl-time.module#ContrlTimePageModule' },
  { path: 'water-time', loadChildren: './water-time/contrl-time.module#ContrlTimePageModule' },
  { path: 'contrl-condition', loadChildren: './contrl-condition/contrl-condition.module#ContrlConditionPageModule' },
  { path: 'water-condition', loadChildren: './water-condition/contrl-condition.module#ContrlConditionPageModule' },
  { path: 'water', loadChildren: './water/water.module#WaterPageModule' },
  {
    path: 'tabs',
    component: LabTabComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ],
      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ],
      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ],
      }
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
