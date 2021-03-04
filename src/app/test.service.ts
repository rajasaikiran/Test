import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(public Hc :HttpClient) { }

// displaying the data from api
  getInfo():Observable<any[]>{
    return this.Hc.get<any[]>("https://jsonplaceholder.typicode.com/posts");
  }


//displaying single user onClick
  getOneUser(id):Observable<object>{
    return this.Hc.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
   }
}
