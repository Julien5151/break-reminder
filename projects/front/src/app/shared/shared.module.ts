import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [BaseComponent],
  exports: [BaseComponent, MatFormFieldModule, MatInputModule],
})
export class SharedModule {}
