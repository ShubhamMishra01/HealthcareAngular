import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticcenterService } from '../appService/diagnosticcenter.service';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {

  constructor(private router: Router,private _centerservice:DiagnosticcenterService) {
      this.router=router;
   }

  ngOnInit(): void {
  }
  click(){
    this._centerservice.addcenter();
    

  }
}
