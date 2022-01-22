import { settingsInitialState, SettingsState } from './components/settings/settings.reducer';

export interface AppState {
  settings: SettingsState;
}

export const appInitialState: AppState = {
  settings: settingsInitialState,
};
