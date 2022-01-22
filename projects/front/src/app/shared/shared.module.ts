import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [BaseComponent],
  exports: [BaseComponent, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SharedModule {}
