import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  user:any
  ServiceService: any;

  constructor() { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.pattern(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$'
      ),]),
    })
  }
  get register() {
    return this.user.controls
  }
  login(){
    console.log('data saved')
    console.log('data printing',this.user.value);
    // this.ServiceService.test(this.user.value).subscribe(() => {   
    // })
    this.ServiceService.catch(this.user.value).subscribe((res:any)=>{

    })
    
  }

}

