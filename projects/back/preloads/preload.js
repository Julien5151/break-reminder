const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPIs', {
  ipcRenderer,
});
