import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { settingsInitialState, settingsReducer, SettingsState } from '../components/settings/settings.reducer';

export interface State {
  settings: SettingsState;
}

export const appInitialState: State = {
  settings: settingsInitialState,
};

export const reducers: ActionReducerMap<State> = {
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
