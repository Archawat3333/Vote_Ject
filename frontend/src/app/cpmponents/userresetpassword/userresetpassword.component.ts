import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userresetpassword',
  templateUrl: './userresetpassword.component.html',
  styleUrls: ['./userresetpassword.component.css']
})
export class UserresetpasswordComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    Newpassword: new FormControl('', [Validators.required,Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  })
  constructor() { }

  ngOnInit(): void {
    
  }
  get username() { return this.loginForm.get('username'); }

  get Newpassword() { return this.loginForm.get('Newpassword'); }


}