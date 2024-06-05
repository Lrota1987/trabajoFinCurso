import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/components/main/main.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";

bootstrapApplication(MainComponent,{
  providers:[
    provideRouter(routes),
    provideHttpClient()
  ]
});
