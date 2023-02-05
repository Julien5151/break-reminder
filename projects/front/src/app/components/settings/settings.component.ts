import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
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
  cgt = false;
  configSaved = false;

  constructor(private readonly ipcService: IpcService, private readonly storeService: StoreService) {}

  ngOnInit(): void {
    // Init hours and minutes from state values
    const { interval, cgt } = this.storeService.getStateSnapshot().settings;
    if (interval) {
      const seconds = interval / 1000;
      this.hours = Math.floor(seconds / 3600);
      this.minutes = (seconds % 3600) / 60;
    }
    // Init CGT from state value
    this.cgt = cgt;
  }

  handleHoursSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.hours = event.value ?? 0;
  }

  handleMinutesSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.minutes = event.value ?? 0;
  }

  handleCGTValueChanged(event: MatSlideToggleChange): void {
    this.cgt = event.checked;
  }

  handleClick(): void {
    const response = this.ipcService.sendSyncMessage([SETTINGS_SAVED_EVENT, (this.hours * 3600 + this.minutes * 60) * 1000, this.cgt]);
    if (response === SETTINGS_APPLIED_EVENT) {
      // Config was successfully applied
      this.configSaved = true;
    } else {
      console.error('interval failed');
    }
  }
}
