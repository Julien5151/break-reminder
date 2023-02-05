import { createAction, props } from '@ngrx/store';

export const resetSettingsAction = createAction('[Settings] Reset');
export const updateBreakIntervalAction = createAction('[Settings] Update break interval', props<{ interval: number | null }>());
export const updateCGTAction = createAction('[Settings] Update CGT', props<{ cgt: boolean }>());
