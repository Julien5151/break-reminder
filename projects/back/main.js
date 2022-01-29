const { app } = require('electron');
const { APP_WINDOW_ALL_CLOSED_EVENT } = require('./constants/events');
const windowService = require('./services/window.service');
const trayService = require('./services/tray.service');
const ipcService = require('./services/ipc.service');

app.whenReady().then(() => {
  // Open settings window
  windowService.createSettingsWindow();
  // Create tray
  trayService.createTray();
  // Handle messages from settings window
  ipcService.handleSettingsMessages();
});

// Don't exit application when all window are closed, keep tray active
app.on(APP_WINDOW_ALL_CLOSED_EVENT, event => event.preventDefault());
