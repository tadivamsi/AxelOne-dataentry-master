import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from 'src/app/service/login.service'

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  router: any;

  constructor( private fb:FormBuilder, private loginservice:LoginService) { }

  ngOnInit(): void { }
  addroleform=this.fb.group({
      role_Id:[''],
      role_Type:[''],
      role_Name:[''],
      role_Status:[''],
      role_Uniqid:['']

})
saverole() {



  const obj={
    "action": "U",
    "role_Id": 0,
    "role_Name": this.addroleform.value.role_Name,
    "role_Type": this.addroleform.value.role_Type,
    "role_Uniqid": this.addroleform.value.role_Uniqid,
    "role_Status": this.addroleform.value.role_Status,
    "role_Created_UserId": 0,
  }
  this.loginservice.saverole(obj).subscribe((res: any) => {
    console.log(res);
    if(res==1)
    {
      alert("successfully Role added")

    }
    else{
      if(res==2)
      {
        alert(" Role Already Existed")
      }
      else{
        alert("Failed to add Role")
      }
      alert("Failed to add Role")
    }
  
  });

  }
  }


