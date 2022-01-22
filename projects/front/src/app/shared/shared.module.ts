import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BaseComponent } from './components/base/base.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BaseComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSliderModule],
})
export class SharedModule {}
