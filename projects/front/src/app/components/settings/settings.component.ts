import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SETTINGS_APPLIED_EVENT, SETTINGS_SAVED_EVENT } from 'projects/back/constants/events';
import { IpcService } from '../../services/ipc/ipc.service';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  hours = 0;
  minutes = 0;
  configSaved = false;

  constructor(private readonly ipcService: IpcService, private readonly storeService: StoreService) {}

  ngOnInit(): void {
    // Init hours and minutes from state values
    const interval = this.storeService.getStateSnapshot()?.settings.interval;
    if (interval) {
      const seconds = interval / 1000;
      this.hours = Math.floor(seconds / 3600);
      this.minutes = (seconds % 3600) / 60;
    }
  }

  handleHoursSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.hours = event.value ?? 0;
  }

  handleMinutesSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.minutes = event.value ?? 0;
  }

  handleClick(): void {
    const response = this.ipcService.sendSyncMessage([SETTINGS_SAVED_EVENT, (this.hours * 3600 + this.minutes * 60) * 1000]);
    if (response === SETTINGS_APPLIED_EVENT) {
      // Config was successfully applied
      this.configSaved = true;
    } else {
      console.error('interval failed');
    }
  }
}
