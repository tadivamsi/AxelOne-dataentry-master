import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  vam:any;
  data:any;
  userId:any;
  p: number = 1;


  constructor( public loginservice:LoginService) { }

  ngOnInit(): void {
this.userlist();

  }
userlist(){
  const obj={
    "userId":0,
  };
  this.loginservice.userlist(obj).subscribe((data: any)=>{
    console.log(data);
    this.vam=data;

  });
}
}
