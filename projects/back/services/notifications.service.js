const { Notification } = require('electron');
const iconService = require('./icon.service');
const stateService = require('./state.service');

class NotificationsService {
  initNotifications() {
    this.breakNotification = new Notification({
      title: "It's break time",
      body: 'You should take a break !',
      icon: iconService.nativeIcon,
    });
    this.cgtBreakNotification = new Notification({
      title: 'Arrêtes le boulot camarade !',
      body: 'Le patronat a assez exploité ta productivité. Pause syndicale maintenant ! Ou grève !',
      icon: iconService.nativeIconCGT,
    });
  }

  showNotification() {
    stateService.settings.cgt ? this.cgtBreakNotification.show() : this.breakNotification.show();
  }
}

module.exports = new NotificationsService();
