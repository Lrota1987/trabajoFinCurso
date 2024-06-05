import { NgModule} from "@angular/core"; 
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BiografiaComponent } from "./components/biografia/biografia.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { LoginComponent } from "./components/login/login.component";


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'biografia', component: BiografiaComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'},

]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
