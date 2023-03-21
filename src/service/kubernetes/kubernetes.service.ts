import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { KubernetesInstance } from "../../module/kubernetes/kubernetes-instance";
import BACKEND_HOST from "../../constant";

@Injectable({providedIn: "root"})
export class KubernetesService {
  constructor(private http: HttpClient) { }

  getInstances(): Observable<KubernetesInstance[]> {
    return this.http.get<KubernetesInstance[]>(BACKEND_HOST + '/api/kubernetes/instances');
  }
}
