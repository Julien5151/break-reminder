import { createReducer, on } from '@ngrx/store';
import { resetSettingsAction, updateBreakIntervalAction, updateCGTAction } from './settings.actions';

export interface SettingsState {
  interval: number | null;
  cgt: boolean;
}

export const settingsInitialState: SettingsState = {
  interval: null,
  cgt: false,
};

export const settingsReducer = createReducer(
  settingsInitialState,
  on(resetSettingsAction, (): SettingsState => settingsInitialState),
  on(
    updateBreakIntervalAction,
    (state, action): SettingsState => ({
      ...state,
      interval: action.interval,
    })
  ),
  on(
    updateCGTAction,
    (state, action): SettingsState => ({
      ...state,
      cgt: action.cgt,
    })
  )
);
