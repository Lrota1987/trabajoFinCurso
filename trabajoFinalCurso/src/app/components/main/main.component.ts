import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { RouterOutlet,  RouterModule, RouterLink, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { routes } from '../../app.routes.';
import { appConfig } from '../../app.config';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [{provide: ActivatedRoute, useValue: routes}]
})
export class MainComponent {

  public token: any;
  public cookie: any;

  public activeUser: any;
  constructor(loogin: LoginService) { 

    this.cookie = loogin;
    this.token = loogin.getToken();
    console.log(this.token);
  }

  desconexion() {
    this.cookie.eliminarToken();
    window.location.reload();
  }








}
