import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Define home explicitly
  { path: 'about', component: AboutComponent }, // Define home explicitly
  { path: 'services', component: ServicesComponent }, // Define home explicitly
  { path: 'contact', component: ContactComponent }, // Define home explicitly
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect root to home
  { path: '**', redirectTo: '' } // Handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
