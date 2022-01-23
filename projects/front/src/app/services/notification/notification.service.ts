import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  title = this.translateService.instant('NOTIFICATIONS.TITLE');
  message = this.translateService.instant('NOTIFICATIONS.MESSAGE');
  iconUrl = 'assets/images/logo/logo_64x64.png';

  constructor(private readonly translateService: TranslateService) {}

  showNotification(): void {
    new Notification(this.title, { body: this.message, icon: this.iconUrl });
  }
}
