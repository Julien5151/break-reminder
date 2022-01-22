import { Component } from '@angular/core';

@Component({
  selector: 'br-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  handleClick(): void {
    new Notification('Break time !', { body: 'You should take a break !', icon: 'assets/images/logo/clock_64.png' });
  }
}
