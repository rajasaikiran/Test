import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import {TestService} from '../test.service';

@Component({
  selector: 'app-viewuser',
  templateUrl:'./viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  myData:any =[];  
  
  constructor(private ar:ActivatedRoute , private ts:TestService) { }

  ngOnInit(): void {


    this.ar.params.subscribe((data)=>{
      // console.log("data..................",data);
      
      this.ts.getOneUser(data.userid).subscribe((totaldata)=>{
        
        this.myData= totaldata;
        // console.log(this.myData);
        

      })
    })


 }
}