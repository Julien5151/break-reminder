import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from './shared/modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, SettingsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, StoreModule.forRoot({}, {})],
  bootstrap: [AppComponent],
})
export class AppModule {}
