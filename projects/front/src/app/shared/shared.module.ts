import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BaseComponent } from './components/base/base.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, TranslateModule],
  exports: [BaseComponent, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SharedModule {}
