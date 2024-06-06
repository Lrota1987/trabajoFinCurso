import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  loading: boolean = true;
  public token: any;



  constructor(private route: ActivatedRoute, private itemService: ItemsService, private loginService: LoginService) {}

  ngOnInit(): void {

    this.token = this.loginService.getToken();

      this.route.params.subscribe(params => {
        this.itemService.getItemById(params['idItem'].toString()).subscribe({
          next: (data: Item) => {
            this.item = data;
            console.log(typeof(this.item._id))
            this.loading = false;
          },
          error: (error: any) => {
            console.log(`There is an error: ${error}`)
            this.loading = false;
          }
        })
      })
  };

  delete() {
    
  }

}
