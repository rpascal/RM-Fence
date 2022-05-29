import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { WindowRefService } from '@shared/services/window-ref/window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isFixed;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private windowRefService: WindowRefService
  ) {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      this.windowRefService.nativeWindow().pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding('class.menu-opened') menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  call() {
    this.windowRefService.nativeWindow().open('tel:+4402365758');
  }

  facebook() {
    this.windowRefService.nativeWindow().open(
      'https://www.facebook.com/Rmfenceohio/'
    );
  }
}
