const path = require('path');
const { writeFile, readFile } = require('fs/promises');
const { app } = require('electron');
const { STATE_FILE } = require('../constants/files');

class StateService {
  static async saveState() {
    const applicationPath = app.getAppPath();
    try {
      const stateStringified = JSON.stringify(this);
      await writeFile(path.join(applicationPath, STATE_FILE), stateStringified);
      return true;
    } catch (error) {
      console.error('Saving state failed');
    }
  }

  static async loadState() {
    const applicationPath = app.getAppPath();
    try {
      const state = JSON.parse(await readFile(path.join(applicationPath, STATE_FILE)));
      return state;
    } catch (error) {
      console.error('Loading state failed');
    }
  }

  constructor() {
    this.settings = { interval: null, intervalId: null };
  }
}

module.exports = new StateService();
