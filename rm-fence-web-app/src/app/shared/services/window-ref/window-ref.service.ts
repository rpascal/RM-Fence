import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class WindowRefService {
  constructor(@Inject(DOCUMENT) private _doc: Document) {}

  nativeWindow(): Window | null {
    return this._doc.defaultView;
  }
}
