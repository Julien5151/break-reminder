const stateService = require('./state.service');

class TimerService {
  /**
   * Start new interval and clear existing one (if any)
   */
  startInterval() {
    // Clear current interval if one already exists
    this.clearInterval();
    // Start new interval
    stateService.settings.intervalId = globalThis.setInterval(() => {
      // Send notification - TO DO
      console.log('Time for a break !');
    }, stateService.settings.interval / 300);
  }

  /**
   * Clear current interval is one already exists
   */
  clearInterval() {
    if (stateService.settings.intervalId) {
      // Clear async task
      globalThis.clearInterval(stateService.settings.intervalId);
      // Reset intervalId in state
      stateService.settings.intervalId = null;
    }
  }
}

module.exports = new TimerService();
