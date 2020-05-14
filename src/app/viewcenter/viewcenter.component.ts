import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticcenterService } from '../appService/diagnosticcenter.service';

@Component({
  selector: 'app-viewcenter',
  templateUrl: './viewcenter.component.html',
  styleUrls: ['./viewcenter.component.css']
})
export class ViewcenterComponent implements OnInit {

  constructor(private router: Router,private _centerservice:DiagnosticcenterService) {
    this.router=router;

 }

  ngOnInit(): void {
  }
  click(){
    this._centerservice.viewcenter();

  }
}