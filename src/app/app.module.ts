import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ShareitComponent } from './shareit/shareit.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PhotoeditComponent } from './photoedit/photoedit.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { AngularBotModule } from './chatbot/angular-bot.module';
import { CalculatorComponent } from './calculator/calculator.component'
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ShareitComponent,
    RestaurantComponent,
  
    PhotoeditComponent,
    CalculatorComponent,
    ],
  imports: [
    ModalModule.forRoot(),
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularBotModule,
  
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
