import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedModule } from './shared/shared.module';
import { metaReducers, reducers } from './store/app-store';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent, SettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
