import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../shared/enums/lang.enum';
import { ENGLISH_TRANSLATIONS } from '../../shared/i18n/english.translations';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(private readonly translateService: TranslateService) {}

  /**
   * Sets default language and load translation objects
   */
  initApp(): void {
    this.translateService.setDefaultLang(Languages.ENGLISH);
    this.translateService.setTranslation(Languages.ENGLISH, ENGLISH_TRANSLATIONS);
  }
}
