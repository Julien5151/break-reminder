import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from './settings.reducer';

export const selectSettingsFeature = createFeatureSelector<SettingsState>('settings');

export const selectSettingsInterval = createSelector(selectSettingsFeature, (state: SettingsState) => state.interval);
export const selectSettingsCGT = createSelector(selectSettingsFeature, (state: SettingsState) => state.cgt);
