import { Component, OnInit } from "@angular/core";
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
declare const swal: any;

@Component({
  selector: 'app-StaffLogin',
  templateUrl: './StaffLogin.component.html',
  styleUrls: ['./StaffLogin.component.css']
})
export class StaffLoginComponent implements OnInit {

  username : FormControl;
  password : FormControl;


  constructor( private request: RequestService,
    private storage: StorageService,
    private router: Router,
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

      this.request.stafflogin(credentials).subscribe((response: any) => {
        if (!response) {
          console.log("something went wrong");
          return;
        }

        if (response.status === "error") {
          console.log("error", response.msg);
          this.storage.clear();
          return;
        }
        console.log("response", response);
        this.storage.set(response.data);
        this.router.navigate(["/dashboard/main"]);
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
