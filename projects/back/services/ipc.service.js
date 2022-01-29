const { ipcMain } = require('electron');

class IpcService {
  handleSettingsMessages() {
    ipcMain.on('synchronous-message', (event, arg) => {
      console.log(arg); // prints "ping"
      event.returnValue = 'pong';
    });
  }
}

module.exports = new IpcService();
