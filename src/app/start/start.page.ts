import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  userName: string;
  userGuest: string;
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }


  ngOnInit() {
    if(localStorage.getItem('user') != null){
      this.router.navigateByUrl('/tabs/tab1');
    }
    this.validation();
  }

  //Validação do campo de nome
  validation(){
    this.userForm = this.fb.group({
      user_name: ['', Validators.required]
    })
  }


  //Coloca um nome de usuário no local storage, escolhido pelo próprio usuário
  setUser(){
    if(this.userForm.valid){
      localStorage.setItem('user', this.userName);
      window.location.reload();
      this.router.navigateByUrl('/tabs/tab1');
    }
  }


}
