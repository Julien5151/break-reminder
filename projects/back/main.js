const { app, BrowserWindow, Tray, nativeImage } = require('electron');

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath('./dist/front/assets/images/logo/clock_64.png');
  const tray = new Tray(icon);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: icon,
  });
  win.loadFile('./dist/front/index.html');

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});
