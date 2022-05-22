import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rmf-why-us-section',
  templateUrl: './why-us-section.component.html',
  styleUrls: ['./why-us-section.component.scss']
})
export class WhyUsSectionComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() { }

  ngOnInit(): void {
  }

}
