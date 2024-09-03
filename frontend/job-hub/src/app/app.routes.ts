import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppTrackerComponent } from './components/app-tracker/app-tracker.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'app-tracker', component: AppTrackerComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
