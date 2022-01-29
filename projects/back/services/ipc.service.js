const { ipcMain } = require('electron');
const { SYNCHRONOUS_CHANNEL } = require('../constants/channels');
const { SETTINGS_SAVED_EVENT, SETTINGS_APPLIED_EVENT } = require('../constants/events');

class IpcService {
  handleSettingsMessages() {
    ipcMain.on(SYNCHRONOUS_CHANNEL, (event, args) => {
      if (args[0] === SETTINGS_SAVED_EVENT) {
        console.log(args[1]);
        event.returnValue = SETTINGS_APPLIED_EVENT;
      }
    });
  }
}

module.exports = new IpcService();
