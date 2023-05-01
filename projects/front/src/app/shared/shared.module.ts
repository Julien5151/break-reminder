import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, TranslateModule],
  exports: [
    BaseComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatDividerModule,
    MatSlideToggleModule,
  ],
})
export class SharedModule {}
