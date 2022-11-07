import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  test(data: any) {
    console.log('sssssssssss', data,)

   return this.http.post('http://localhost:3333/registration/login', data)
  }

  
}
