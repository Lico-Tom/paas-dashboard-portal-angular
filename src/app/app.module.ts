import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { HomePageComponent } from './home-page/home-page.component';
import { KafkaInstancesComponent } from './kafka/kafka-instances/kafka-instances.component';
import { KubernetesInstancesComponent } from './kubernetes/kubernetes-instances/kubernetes-instances.component';
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    KafkaInstancesComponent,
    KubernetesInstancesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
