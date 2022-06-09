import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ShareitComponent } from './shareit/shareit.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PhotoeditComponent } from './photoedit/photoedit.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shareit', component:ShareitComponent },
  { path: 'chatbot', component:ChatbotComponent },
  {path: 'restaurant', component: RestaurantComponent   },
  {path: 'photedit', component:PhotoeditComponent },
  {path: 'calculator', component:CalculatorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
