import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SETTINGS_ROUTE } from './app-routing.module';
import { InitializationService } from './services/initialization/initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router, private readonly initializationService: InitializationService) {}

  ngOnInit(): void {
    this.initializationService.initApp();
    this.router.navigate([SETTINGS_ROUTE]);
  }
}
