import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SETTINGS_ROUTE } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly router: Router) {
    this.router.navigate([SETTINGS_ROUTE]);
  }
}
