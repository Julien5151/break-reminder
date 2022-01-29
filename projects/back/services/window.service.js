const { BrowserWindow } = require('electron');
const path = require('path');
const { SPA_INDEX_HTML_PATH } = require('../constants/paths');
const iconService = require('./icon.service');

class WindowService {
  constructor() {
    this.activeWindow = null;
  }
  createSettingsWindow() {
    // Instanciate window
    const window = new BrowserWindow({
      width: process.env.DEV ? 1000 : 400,
      height: 400,
      icon: iconService.nativeIcon,
    });
    window.loadFile(path.join(__dirname, SPA_INDEX_HTML_PATH));
    // Remove menu from window
    window.setMenu(null);
    // Open console in develop
    if (process.env.DEV) {
      window.webContents.openDevTools();
    }
    // Bind reference to service property
    this.activeWindow = window;
  }
}

module.exports = new WindowService();
