import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
            ReactiveFormsModule,
            CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ UserService ]
})


export class LoginComponent implements OnInit {

  errorLogin: boolean = false;
  public user: User;
  formulario: FormGroup;
  login: any;



  constructor(private UserService: UserService, private form: FormBuilder, private router: Router, login: LoginService) {
    this.user = new User();


    this.formulario = this.form.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })

    this.login = login;



  }

  ngOnInit(): void {

    if (this.login.getToken()) {
      this.router.navigate(['/']);
    }
    /*if (this.login.activeUser.name !== '') {

    }*/
    this.UserService.getUser().subscribe( data => {
      console.log(JSON.stringify(data[0]));
      this.user = data[0];
    })

    
      //this.myFormContact.get('name')?.disable(); Impide que el usuario introducido por la función anterior pueda ser modificado.
  
      //Subscripciones:
      /*
      this.myFormContact.get('dniType')?.valueChanges.subscribe(value => {
        this.mostrarDNI = value != '';
        this.dniType = value
      });
      */


  }
  
  validarUser() {
    if (this.formulario.value.user === this.user.name && this.formulario.value.pass === this.user.password) {
      this.login.setToken(this.user.name);
      this.errorLogin = false;
      window.location.reload();
    }
    else {
      this.errorLogin = true;
    }
  }

  

  enviar() {
    console.log(this.formulario.value);
    this.validarUser();

  }

  hasError(controlName: string, errorType: string) {
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }




  

}
