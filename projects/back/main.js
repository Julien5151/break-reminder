const { app, BrowserWindow, Tray, nativeImage, Menu } = require('electron');
const { LOGO_64_PX_PATH, SPA_INDEX_HTML_PATH } = require('./constants/paths');

app.whenReady().then(() => {
  // Create icon
  const icon = nativeImage.createFromPath(LOGO_64_PX_PATH);
  // Instanciate window
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    icon: icon,
  });
  window.loadFile(SPA_INDEX_HTML_PATH);
  // Remove menu from window
  window.setMenu(null);
  // Open console in develop
  if (process.env.DEV) {
    window.webContents.openDevTools();
  }
  // Instanciate tray
  const tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open settings',
      click: () => {
        window.show();
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
  }, 0);
});
