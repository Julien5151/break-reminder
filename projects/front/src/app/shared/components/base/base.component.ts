import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'br-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnDestroy {
  unsubscribe$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
