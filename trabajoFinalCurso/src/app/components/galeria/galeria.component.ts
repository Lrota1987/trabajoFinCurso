import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  
  public token: any;
  public cookie: any;
  public items: Item[];

  constructor(private itemsService:  ItemsService) {
    this.items = [];


  }

  ngOnInit(): void {


      this.itemsService.getItems().subscribe( data => {
      console.log(JSON.stringify(data[0]));
      this.items = data;
    })

    console.log(this.items);


  }

}
