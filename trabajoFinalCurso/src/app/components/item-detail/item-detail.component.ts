import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {

  item?: Item;
  loading: boolean = true;
  public token: any;
  update: boolean = false;
  formulario: FormGroup;



  constructor(private router: Router, private route: ActivatedRoute, private form: FormBuilder, private itemService: ItemsService, private loginService: LoginService) {
    this.formulario = new FormGroup({});
  }

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

      this.formulario = new FormGroup({
        title: new FormControl(this.item?.title, Validators.required),
        description: new FormControl(this.item?.description)
      })
      

  };

  clickUpdate() {
    if (!this.update) {
      this.update = true;
    }
    else {
      this.update = false;
    }
  }


  delete(id: any) {
      this.itemService.deleteItem(id);
      this.router.navigate(['/galeria']);
    }

  updateItem(id: any, image: any) {
    const form = this.formulario;
    console.log(form.value.title)
    if (this.formulario.valid) {
      this.itemService.updateItem(id, image, form.value.title, form.value.description);
      this.update = false;
      window.location.reload();
    }

    }


  hasError(controlName: string, errorType: string) {
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }

}
