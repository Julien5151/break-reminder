const { app, Tray, Menu } = require('electron');
const iconService = require('./icon.service');
const windowService = require('./window.service');
const stateService = require('./state.service');

class TrayService {
  constructor() {
    this.tray = null;
  }
  createTray() {
    // Instanciate tray
    const tray = new Tray(iconService.nativeIcon);
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Open settings',
        click: () => {
          windowService.createSettingsWindow();
        },
      },
      {
        label: 'Close',
        click: () => {
          app.quit();
        },
      },
    ]);
    // Workaround to make tray menu items work after first blur,
    // must be added asynchronously
    setTimeout(() => {
      tray.setContextMenu(contextMenu);
      // Bind reference to service property
      this.tray = tray;
    }, 0);
  }

  updateTrayImage() {
    this.tray.setImage(stateService.settings.cgt ? iconService.nativeIconCGT : iconService.nativeIcon);
  }
}

module.exports = new TrayService();
