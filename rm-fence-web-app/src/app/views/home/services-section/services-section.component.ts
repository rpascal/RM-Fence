import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rmf-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() { }

  ngOnInit(): void {
  }

}
