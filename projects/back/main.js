const { app } = require('electron');
const { APP_WINDOW_ALL_CLOSED_EVENT } = require('./constants/events');
const windowService = require('./services/window.service');
const trayService = require('./services/tray.service');

app.whenReady().then(() => {
  // Open settings window
  windowService.createSettingsWindow();
  // Create tray
  trayService.createTray();
});

// Don't exit application when all window are closed, keep tray active
app.on(APP_WINDOW_ALL_CLOSED_EVENT, event => event.preventDefault());
