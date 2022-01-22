const { app, BrowserWindow, Tray, nativeImage } = require('electron');
const { WINDOW_ALL_CLOSED_EVENT } = require('./constants/events');
const { MACOS } = require('./constants/os');
const { LOGO_64_PX_PATH, SPA_INDEX_HTML_PATH } = require('./constants/paths');

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(LOGO_64_PX_PATH);
  const tray = new Tray(icon);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: icon,
  });
  // Remove menu window
  win.loadFile(SPA_INDEX_HTML_PATH);

  app.on(WINDOW_ALL_CLOSED_EVENT, () => {
    if (process.platform !== MACOS) app.quit();
  });
});
