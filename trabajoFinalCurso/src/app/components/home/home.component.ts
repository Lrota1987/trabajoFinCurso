import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { getRandomValues } from 'crypto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public items: Item[];
  public img: any;

  constructor(private itemService: ItemsService) {
    this.items = [];

    itemService.getItems().subscribe( data => {
      this.items = data;
      this.img = data[Math.trunc(Math.random()*(this.items.length-1))].image;
    })
  }

}
