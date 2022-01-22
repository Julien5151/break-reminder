import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreService } from '../../services/store/store.service';
import { updateBreakIntervalAction } from './settings.actions';
import { selectSettingsInterval } from './settings.selectors';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  interval$ = this.store.select(selectSettingsInterval);

  constructor(private readonly store: Store, private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreakIntervalAction({ interval: 3000 }));
    console.log(this.storeService.getStateSnapshot());
    console.log(this.storeService.getStateSnapshotWithSelector(selectSettingsInterval));
  }
}
