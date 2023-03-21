import BACKEND_HOST from "../../constant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KafkaInstance} from "../../module/kafka/kafka-instance";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class KafkaService {
  constructor(private http: HttpClient) {
  }

  getInstances(): Observable<KafkaInstance[]> {
    return this.http.get<KafkaInstance[]>(BACKEND_HOST + '/api/kafka/instances');
  }
}
