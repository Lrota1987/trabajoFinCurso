import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
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
