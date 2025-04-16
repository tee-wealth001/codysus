import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Define home explicitly
  { path: 'about', component: AboutComponent }, // Define home explicitly
  { path: 'services', component: ServicesComponent }, // Define home explicitly
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: '**', redirectTo: '/home' } // Handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
