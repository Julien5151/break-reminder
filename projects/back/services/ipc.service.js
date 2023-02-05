const { ipcMain } = require('electron');
const { SYNCHRONOUS_CHANNEL } = require('../constants/channels');
const { SETTINGS_SAVED_EVENT, SETTINGS_APPLIED_EVENT, LOAD_STATE_EVENT } = require('../constants/events');
const stateService = require('./state.service');
const timerService = require('./timer.service');

class IpcService {
  handleSettingsMessages() {
    ipcMain.on(SYNCHRONOUS_CHANNEL, (event, args) => {
      if (args[0] === SETTINGS_SAVED_EVENT) {
        // Save settings in state
        stateService.settings.interval = args[1];
        stateService.settings.cgt = args[2];
        // If value is 0, no break reminder
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
    ipcMain.on(SYNCHRONOUS_CHANNEL, (event, args) => {
      if (args[0] === LOAD_STATE_EVENT) {
        // Retrieve interval from state
        const settings = stateService.settings;
        // Return interval to window
        event.returnValue = { interval: settings.interval, cgt: settings.cgt };
      }
    });
  }
}

module.exports = new IpcService();
