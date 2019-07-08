import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private fontStyle="Comic Sans MS";
  private captchaHeight='200px';
  private captchaWidth='350px';
  private captchaColor="black"
  constructor() { }


  ngOnInit() {
  }
  //this is the event which parent need to define
  captchaHandler($event){
    console.log($event);;
    alert($event);
  }
}
