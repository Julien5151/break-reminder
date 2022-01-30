import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { LOAD_STATE_EVENT } from 'projects/back/constants/events';
import { updateBreakIntervalAction } from '../../components/settings/settings.actions';
import { Languages } from '../../shared/enums/lang.enum';
import { ENGLISH_TRANSLATIONS } from '../../shared/i18n/english.translations';
import { IpcService } from '../ipc/ipc.service';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(
    private readonly translateService: TranslateService,
    private readonly ipcService: IpcService,
    private readonly store: Store
  ) {}

  /**
   * Sets default language and load translation objects then loads state from main process
   */
  initApp(): void {
    // Set translations
    this.translateService.setTranslation(Languages.ENGLISH, ENGLISH_TRANSLATIONS);
    this.translateService.setDefaultLang(Languages.ENGLISH);
    // Load state from main process
    const interval = this.ipcService.sendSyncMessage([LOAD_STATE_EVENT]) as unknown as number | null;
    // Update state
    this.store.dispatch(updateBreakIntervalAction({ interval: interval }));
  }
}
