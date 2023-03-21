import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {KafkaInstance} from "../../module/kafka/kafka-instance";
import {BehaviorSubject, Observable} from "rxjs";
import {KafkaService} from "./kafka.service";

export class KafkaInstanceDataSource implements DataSource<KafkaInstance> {

  private kafkaInstance = new BehaviorSubject<KafkaInstance[]>([])

  constructor(private kafkaService : KafkaService) {}
  connect(collectionViewer: CollectionViewer): Observable<KafkaInstance[]> {
    return this.kafkaInstance.asObservable();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect(collectionViewer: CollectionViewer): void {
    return this.kafkaInstance.complete();
  }

  getInstances() {
    this.kafkaService.getInstances().subscribe((instances: KafkaInstance[]) => {
      this.kafkaInstance.next(instances);
    });
  }

}
