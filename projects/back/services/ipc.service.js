const { ipcMain } = require('electron');
const { SYNCHRONOUS_CHANNEL } = require('../constants/channels');
const { SETTINGS_SAVED_EVENT, SETTINGS_APPLIED_EVENT } = require('../constants/events');
const stateService = require('./state.service');
const timerService = require('./timer.service');

class IpcService {
  handleSettingsMessages() {
    ipcMain.on(SYNCHRONOUS_CHANNEL, (event, args) => {
      if (args[0] === SETTINGS_SAVED_EVENT) {
        // Save settings in state
        stateService.settings.interval = args[1];
        // If value is no, no break reminder
        if (stateService.settings.interval === 0) {
          timerService.clearInterval();
        } else {
          // Start break reminder
          timerService.startInterval();
        }
        // Return confirmation to window
        event.returnValue = SETTINGS_APPLIED_EVENT;
      }
    });
  }
}

module.exports = new IpcService();
