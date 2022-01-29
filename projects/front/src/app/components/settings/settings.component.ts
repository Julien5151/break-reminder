import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SETTINGS_APPLIED_EVENT, SETTINGS_SAVED_EVENT } from 'projects/back/constants/events';
import { IpcService } from '../../services/ipc/ipc.service';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  hours = 0;
  minutes = 0;
  configSaved = false;

  constructor(private readonly ipcService: IpcService) {}

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
      console.log('interval applied');
    } else {
      console.error('interval failed');
    }
  }
}
