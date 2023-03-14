import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:DonutsComponent}, 
  {path:"donut/:id", component:DonutDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }