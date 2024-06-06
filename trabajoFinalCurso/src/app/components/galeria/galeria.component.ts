import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes.';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  providers: [{provide: ActivatedRoute, useValue: routes}]
})
export class GaleriaComponent {
  
  public token: any;
  public items: Item[];

  constructor(private itemsService:  ItemsService, private loginService: LoginService) {
    this.items = [];
    this.token = loginService.getToken();


  }

  ngOnInit(): void {


      this.itemsService.getItems().subscribe( data => {
      console.log(JSON.stringify(data[1]._id));
      this.items = data;
    })

    console.log(this.items);


  }

}
