import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  selectImage: any;
  url:string='';

  router: any;
  formbuilder: any;
  constructor(private fb:FormBuilder, private loginservice:LoginService) { }

  ngOnInit(): void {
  }

    userForm=this.fb.group({
      fname:['',Validators.required,],
      lname:['' ,Validators.required,],
      mobile:['' ,Validators.required,],
      email:['',Validators.required,],
      address:['',Validators.required,],
      mapAddressLink:['',Validators.required,],
      user_name:['',Validators.required,],
      user_pass:['',Validators.required,],
      user_Profileimage:['',Validators.required,],
      IsAdmin:['',Validators.required,],
      Type:['',Validators.required,],
      user_status:['',Validators.required,],

    })

  //  selectFile(a:any){
  //    if(a.target.files){
  //      var reader =new FileReader();
  //      reader.readAsDataURL(a.target.files[0]);
  //      reader.onload=(event:any)=>{
  //        this.url=event.target.result;
  //        this.selectImage=event.target.files[0];
  //      }
  //    }
  //   }
      SaveUser() {

        // console.log('my value is',this.userForm.value.fname);
        // console.log('my value is',this.userForm.value.lname);
      const obj1={
        "action": "A",
        "user_Id": 0,
        "user_Firstname":this.userForm.value.fname,
        "user_Lastname": this.userForm.value.lname,
        "user_Phone": this.userForm.value.mobile,
        "user_Email": this.userForm.value.email,
        "user_Address": this.userForm.value.address,
        "user_Mapaddresslink":this.userForm.value.mapAddressLink,
        "user_Username": this.userForm.value.user_name,
        "uE_Password": this.userForm.value.user_pass,
        "user_Profileimage":"",
        "user_Roleid": 2,
        "user_IsAdmin":  this.userForm.value.IsAdmin,
        "user_Type":  this.userForm.value.Type,
        "user_Status": "Y",
        "user_Created_Userid":1,
        "err_no": 0
      }
      this.loginservice.SaveUser(obj1)
      .subscribe((res: any)=>{
        console.log(res)
        if (res==1){
          alert('new user added successfully');
          this.router.navigate(['admin']);
        }
  else{
    alert("failed")
  }
      });

      }


     }


