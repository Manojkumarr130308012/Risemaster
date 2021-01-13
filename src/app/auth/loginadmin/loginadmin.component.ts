import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { Router } from "@angular/router";
import { RequestService } from "../../services/request.service";
import { StorageService } from "../../services/storage.service";
import { AuthService } from "../../services/auth.service";

declare const $: any;
declare const M: any;
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {
  username : FormControl;
  password : FormControl;
  addBatchForm: any;
  submitted = false;
  constructor( private request: RequestService,
    private storage: StorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) {

      this.username= new FormControl('', Validators.required);
      this.password = new FormControl('', Validators.required);
    }

    staffLogin() {

      const credentials = {
        username: this.username.value,
        password: this.password.value
      };

      console.log("credentials", credentials);

      this.request.adminlogin(credentials).subscribe((response: any) => {
        if (response.msg == "username or password invalid") {
          console.log("something went wrong");
          this.router.navigate(["/auth/loginadmin"]);
          Swal.fire("Invalid Username And Password")
          return;
        }

        if (response.status === "0") {
          this.router.navigate(["/auth/loginadmin"]);
          console.log("error", response.msg);
          Swal.fire("Invalid Username And Password")
          this.storage.clear();
          return;
        }
        console.log("response", response);
        this.storage.set(response.data);
        this.router.navigate(["/dashboard/main"]);
        Swal.fire("Welcome !!!")
      });

      console.log("login");
      //this.router.navigate(['/dashboard/main']);
    }


  ngOnInit() {
    if (!this.auth.isValidUser(true)) {
      return;
    }

  }

}
