import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {TestService} from '../test.service'
import {Router} from '@angular/router'





@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 


   
  Testdata:any[] = [];
 
  Colors : string[]=[];
  

  // Add colors to the empty array
    addColor(val)
    {
      
    let enteredcolor = (val.value)
    this.Colors.push(enteredcolor) 
  }
   
 
 
  constructor( private rt:Router, private Ts:TestService) { }

  ngOnInit(): void {

  

    this.Ts.getInfo().subscribe(
      (data)=>{
        this.Testdata=data;
       
      },
      (err)=>{
             console.log(err)
      }
    )
       

    
  }
   // see profile navigates to view user with id
   viewProfile(id){
    console.log(id);
    
   this.rt.navigateByUrl(`/viewuser/${id}` )

  
  }
}



















