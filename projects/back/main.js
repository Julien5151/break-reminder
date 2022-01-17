const { app, BrowserWindow, Tray } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './dist/front/assets/images/logo_final_460px.png',
  });
  win.loadFile('./dist/front/index.html');
};

app.whenReady().then(() => {
  const appIcon = new Tray('./dist/front/assets/images/logo_final_460px.png');
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
});
