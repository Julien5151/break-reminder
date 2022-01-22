import { Injectable } from '@angular/core';
import { DefaultProjectorFn, MemoizedSelector, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { State } from '../../store/app-store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private readonly store: Store<State>) {}

  /**
   * Returns a snapshot of the application state at the moment of getStateSnapshot invokation.
   */
  getStateSnapshot(): State | null {
    let appState = null;
    this.store
      .select(state => state)
      .pipe(take(1))
      .subscribe(state => {
        appState = state;
      });
    return appState;
  }

  /**
   * Returns a value of the State using the selector passed in argument.
   */
  getStateSnapshotWithSelector<T>(selector: MemoizedSelector<any, T, DefaultProjectorFn<T>>): T | null {
    let value = null;
    this.store
      .select(selector)
      .pipe(take(1))
      .subscribe(v => {
        value = v;
      });

    return value;
  }
}
