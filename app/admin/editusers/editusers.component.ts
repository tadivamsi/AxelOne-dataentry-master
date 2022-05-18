import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  constructor( private fb:FormBuilder, private loginservice:LoginService) { }
  selectImage: any;
  url:string='';

  router: any;

  ngOnInit(): void {
  }
  userForm=this.fb.group({
    
  })


}
