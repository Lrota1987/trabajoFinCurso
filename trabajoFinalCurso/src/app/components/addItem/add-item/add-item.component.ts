import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../../services/items.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})


export class AddItemComponent implements OnInit {

  public token: any;
  formulario: FormGroup;
  public archivos: any = [];
  public previsualizacion: string = '';
  image: any = '';
  file: any;

  constructor(private loginService: LoginService,private itemService: ItemsService, private routes: Router, private form: FormBuilder, private sanitizer: DomSanitizer) {
    this.token=loginService.getToken();
    this.formulario = new FormGroup({});

  }


  ngOnInit(): void {

    this.formulario = new FormGroup({
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null)
    })

    if (!this.token) {
      this.routes.navigate(['/']);
    }
  }

  capturarFile(event: any) {
      const archivoCapturado = event.target.files[0];
        this.extraerBase64(archivoCapturado).then((imagen: any) => {
          this.previsualizacion = imagen.base;

        });

        this.file = archivoCapturado;
        //this.archivos.push(archivoCapturado)




  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  subirObra() {
    console.log(this.file);
    const form = this.formulario;
    if (this.formulario.valid) {
      this.itemService.uploadItem(form.value.title, this.file, form.value.description)
        .subscribe(data=> {
          this.formulario = new FormGroup({
            title: new FormControl(null),
            image: new FormControl(null),
            description: new FormControl(null)
          })
        })
        this.routes.navigate(['/galeria']);

    }
  }

  hasError(controlName: string, errorType: string) {
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }

}
