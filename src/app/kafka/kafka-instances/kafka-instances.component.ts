import {Component, OnInit} from '@angular/core';
import {KafkaInstanceDataSource} from "../../../service/kafka/kafka.instance.datasource";
import {KafkaService} from "../../../service/kafka/kafka.service";

@Component({
  selector: 'app-kafka-instances',
  templateUrl: './kafka-instances.component.html',
  styleUrls: ['./kafka-instances.component.scss']
})
export class KafkaInstancesComponent implements OnInit {

  kafkaDataSource: KafkaInstanceDataSource

  constructor(private kafkaService: KafkaService) {
    this.kafkaDataSource = new KafkaInstanceDataSource(this.kafkaService);
  }

  ngOnInit(): void {
    this.kafkaDataSource.getInstances();
  }

}
