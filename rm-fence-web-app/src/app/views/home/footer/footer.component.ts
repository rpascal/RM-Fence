import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from '@shared/helpers/window.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  call() {
    this.window.open('tel:+4402365758');
  }


}
