import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import {TestService} from '../test.service';

@Component({
  selector: 'app-viewuser',
  templateUrl:'./viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {


 
  myData:any={};
  constructor(private ar:ActivatedRoute , private ts:TestService) { }

  ngOnInit(): void {


    this.ar.params.subscribe((data)=>{
      //  console.log("data..................",data);
      
      this.ts.getInfo().subscribe((totaldata)=>{
        //  console.log("data1/.........",totaldata);
        let details
        totaldata.filter(function(filtereddata){

          if (data.id == filtereddata.id)
          {
             details= filtereddata ;
            
          }
        })
        if(details)
        {
          this.myData=details

        }

      })
    })
 
     






 }
}