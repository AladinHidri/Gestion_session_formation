import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FakesessionitemService]
})
export class AdminComponent implements OnInit, AfterContentChecked {

  routename;

  constructor(private router: Router) {
  }

  log(val):void{
    console.log(val);
  }


  ngAfterContentChecked():void{
    console.log("test");
    console.log((this.router.url.split('?')[0]));
    this.routename = (this.router.url.split('?')[0])
        .replace("/admin/","")
        .replace("/add","")
        .replace("/edit","")
        .replace("/list","")
        .replace("/","");
    console.log(this.routename);
  }

  ngOnInit(): void {

  }

}
