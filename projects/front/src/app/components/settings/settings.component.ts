import { Component, OnDestroy } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnDestroy {
  hours = 0;
  minutes = 0;
  intervalId = 0;

  handleSliderValueChanged(event: MatSliderChange): void {
    this.hours = Math.floor((event.value ?? 0) / 60);
    this.minutes = (event.value ?? 0) % 60;
  }

  handleClick(): void {
    clearInterval(this.intervalId);
    this.intervalId = window.setInterval(() => {
      new Notification('Break time !', { body: 'You should take a break !', icon: 'assets/images/logo/clock_64.png' });
    }, (this.hours * 3600 + this.minutes * 60) * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
