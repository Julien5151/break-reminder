import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { SYNCHRONOUS_CHANNEL } from 'projects/back/constants/channels';

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

  /**
   * Send message to main process synchronously and returns the reponse
   */
  sendSyncMessage(args: [string, ...any]): string {
    return this.ipcRenderer.sendSync(SYNCHRONOUS_CHANNEL, args);
  }
}
