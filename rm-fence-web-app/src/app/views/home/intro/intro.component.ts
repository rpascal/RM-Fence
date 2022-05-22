import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from '@shared/helpers/window.helper';

@Component({
  selector: 'rmf-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  call() {
    this.window.open('tel:+4402365758');
  }
}
