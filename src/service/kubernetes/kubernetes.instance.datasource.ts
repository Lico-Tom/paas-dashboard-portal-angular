import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { KubernetesInstance } from "../../module/kubernetes/kubernetes-instance";
import { KubernetesService } from "./kubernetes.service";
import { BehaviorSubject, Observable } from "rxjs";

export class KubernetesInstanceDataSource implements DataSource<KubernetesInstance> {

  private instancesSubject = new BehaviorSubject<KubernetesInstance[]>([]);

  constructor(private kubernetesService: KubernetesService) {}

  connect(collectionViewer: CollectionViewer): Observable<KubernetesInstance[]> {
    return this.instancesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.instancesSubject.complete();
  }

  getInstances() {
    this.kubernetesService.getInstances().subscribe((instances: KubernetesInstance[]) => {
      this.instancesSubject.next(instances);
    });
  }
}
