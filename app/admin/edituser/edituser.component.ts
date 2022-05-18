import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor( private fb:FormBuilder, private loginservice:LoginService ) { }
  selectImage: any;
  url:string='';

  router: any;

  ngOnInit(): void {
  }
  userForm=this.fb.group({

  })


  }


