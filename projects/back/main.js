const { app } = require('electron');
const { APP_WINDOW_ALL_CLOSED_EVENT } = require('./constants/events');
const windowService = require('./services/window.service');
const trayService = require('./services/tray.service');
const ipcService = require('./services/ipc.service');
const notificationsService = require('./services/notifications.service');

app.whenReady().then(() => {
  // Open settings window
  windowService.createSettingsWindow();
  // Create tray
  trayService.createTray();
  // Init notification objects
  notificationsService.initNotifications();
  // Handle messages from settings window
  ipcService.handleSettingsMessages();
});

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();
// Don't exit application when all window are closed, keep tray active
app.on(APP_WINDOW_ALL_CLOSED_EVENT, event => event.preventDefault());
