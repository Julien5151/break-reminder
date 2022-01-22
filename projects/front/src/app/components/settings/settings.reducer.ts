import { createReducer, on } from '@ngrx/store';
import { resetSettingsAction, updateBreakIntervalAction } from './settings.actions';

export interface SettingsState {
  interval: number | null;
}

export const settingsInitialState: SettingsState = {
  interval: null,
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
  )
);
