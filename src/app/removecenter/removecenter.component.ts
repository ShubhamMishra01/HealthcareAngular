import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticcenterService } from '../appService/diagnosticcenter.service';


@Component({
  selector: 'app-removecenter',
  templateUrl: './removecenter.component.html',
  styleUrls: ['./removecenter.component.css']
})
export class RemovecenterComponent implements OnInit {

  
  constructor(private router: Router,private _centerservice:DiagnosticcenterService) {
    this.router=router;

 }
  ngOnInit(): void {
  }
  click(){
    this._centerservice.removecenter();
   
  }
}
