import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root',
})
export class IpcService {
  // ipcRenderer API from electron
  ipcRenderer: IpcRenderer;
  constructor() {
    // Bind to IpcRenderer from preload script
    this.ipcRenderer = (window as any).electronAPIs.ipcRenderer;
  }

  sendSyncMessage() {
    console.log(this.ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
  }
}
