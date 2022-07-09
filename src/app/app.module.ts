import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { ServiceBudgetService } from './service-budget.service';
import { CounterComponent } from './counter/counter.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    CounterComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ServiceBudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
