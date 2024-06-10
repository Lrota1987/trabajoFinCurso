import { Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { RouterOutlet,  RouterModule, RouterLink, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { routes } from '../../app.routes.';
import { appConfig } from '../../app.config';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [{provide: ActivatedRoute, useValue: routes}]
})
export class MainComponent implements OnInit {

  public token: any;
  public cookie: any;


  public activeUser: any;
  constructor(loogin: LoginService) { 


    this.cookie = loogin;
    this.token = loogin.getToken();
    console.log(this.token);


  }

  ngOnInit(): void {

    
  }


  

  desconexion() {
    this.cookie.eliminarToken();
    window.location.reload();
  }








}
