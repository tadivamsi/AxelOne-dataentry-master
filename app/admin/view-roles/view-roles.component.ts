import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {
  getloginservice: any;
  Role: any;
  p: number = 1;


  constructor( public loginservice:LoginService) { }

  ngOnInit(): void {
    this.Rolelist();
  }
  Rolelist(){
    const obj2={
      "expression":"",
      "sortby":"",
      "rowno":0
    }
    this.loginservice.Rolelist(obj2)
    .subscribe((res:any)=>
      {
        console.log(res);
        this.Role=res
      })
  }
}
