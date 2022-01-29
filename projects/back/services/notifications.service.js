const { Notification } = require('electron');
const iconService = require('./icon.service');

class NotificationsService {
  constructor() {
    this.notificationTitle = "It's break time";
    this.notificationMessage = 'You should take a break !';
  }

  initNotifications() {
    this.breakNotification = new Notification({
      title: this.notificationTitle,
      body: this.notificationMessage,
      icon: iconService.nativeIcon,
    });
  }

  showNotification() {
    this.breakNotification.show();
  }
}

module.exports = new NotificationsService();
