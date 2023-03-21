import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KafkaInstancesComponent } from "./kafka/kafka-instances/kafka-instances.component";
import { KubernetesInstancesComponent } from "./kubernetes/kubernetes-instances/kubernetes-instances.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'kafka', component: KafkaInstancesComponent},
  {path: 'kubernetes', component: KubernetesInstancesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
