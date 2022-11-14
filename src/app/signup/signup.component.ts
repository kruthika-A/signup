import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userData:string=''
  userVar:string=''
  userBrw:string=''
  user:any

  constructor(private ServiceService: ServiceService) { }

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
  
  save(){
    console.log('data saved')
    // this.appService.getAllusers().subscribe({username:this.userData,email:this.email})
    // console.log('sssss',this.userData,this.userVar,this.userBrw);
    console.log('ssss',this.user.value);
    this.ServiceService.test(this.user.value).subscribe((res) => {   
    })
     
  }
  
}



