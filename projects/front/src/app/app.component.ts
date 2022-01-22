import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SETTINGS_ROUTE } from './app-routing.module';
import { InitializationService } from './services/initialization/initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly router: Router, private readonly initializationService: InitializationService) {
    this.initializationService.initApp();
    this.router.navigate([SETTINGS_ROUTE]);
  }
}
