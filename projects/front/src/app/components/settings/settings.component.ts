import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBreakIntervalAction } from './settings.actions';
import { selectSettingsInterval } from './settings.selectors';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  interval$ = this.store.select(selectSettingsInterval);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreakIntervalAction({ interval: 3000 }));
  }
}
