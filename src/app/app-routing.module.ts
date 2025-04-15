import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Define home explicitly
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: '**', redirectTo: '/home' } // Handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
