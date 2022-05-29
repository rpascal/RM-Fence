import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '@shared/services/window-ref/window-ref.service';

@Component({
  selector: 'rmf-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private windowRefService: WindowRefService) {}

  ngOnInit() {}

  call() {
    this.windowRefService.nativeWindow().open('tel:+4402365758');
  }
}
