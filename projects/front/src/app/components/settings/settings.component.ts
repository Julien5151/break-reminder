import { Component, OnDestroy } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnDestroy {
  hours = 0;
  minutes = 0;
  intervalId = 0;
  configSaved = false;

  constructor(private readonly notificationService: NotificationService) {}

  handleHoursSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.hours = event.value ?? 0;
  }

  handleMinutesSliderValueChanged(event: MatSliderChange): void {
    this.configSaved = false;
    this.minutes = event.value ?? 0;
  }

  handleClick(): void {
    this.configSaved = true;
    clearInterval(this.intervalId);
    this.intervalId = window.setInterval(() => {
      this.notificationService.showNotification();
    }, (this.hours * 3600 + this.minutes * 60) * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
