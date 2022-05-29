import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '@shared/services/window-ref/window-ref.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private windowRefService: WindowRefService) {}

  ngOnInit() {}

  call() {
    this.windowRefService.nativeWindow().open('tel:+4402365758');
  }
}
