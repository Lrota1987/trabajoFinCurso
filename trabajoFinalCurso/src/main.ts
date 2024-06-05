import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/components/main/main.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.';
import { provideHttpClient } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { appConfig } from './app/app.config';

bootstrapApplication(MainComponent,{
  providers:[
    ...appConfig.providers,
    provideHttpClient()
  ]
});
