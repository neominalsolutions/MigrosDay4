import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {



  constructor(private fb:FormBuilder, private loginService:LoginService) { }

  loginForm:FormGroup = this.fb.group(({
    email:['eve.holt@reqres.in'],
    password:['cityslicka']
  }))

  ngOnInit(): void {


  }


  onSubmit(){
    if(this.loginForm.valid){

      const param = this.loginForm.value;
      console.log('onSubmit',param);
      

      this.loginService.login(param).subscribe(user => {
        console.log('authenticated user', user);

      });

    }
  }

}
