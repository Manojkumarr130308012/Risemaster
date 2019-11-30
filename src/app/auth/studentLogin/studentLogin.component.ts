import { Component, OnInit } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { RequestService } from "../../services/request.service";
import { StorageService } from "../../services/storage.service";
import { AuthService } from "../../services/auth.service";

declare const jQuery: any;
declare const $: any;

@Component({
  selector: "app-login",
  templateUrl: "./studentLogin.component.html",
  styleUrls: ["./studentLogin.component.scss"]
})
export class StudentLoginComponent implements OnInit {
  public username : any;
  public password : any;

  constructor(
    private request: RequestService,
    private storage: StorageService,
    private router: Router,
    private auth: AuthService
  ) {

  }

  onSubmit() {
    const credentials = {
      username: this.username.value,
      password: this.password.value
    };

    console.log("credentials", credentials);

    this.request.StuLogin(credentials).subscribe((response: any) => {
      if (!response) {
        console.log("something went wrong");
        // swal('Enter UserName and Password');
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

    this.username= new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    /* if (!this.auth.isValidUser(true)) {
      return;
    }*/

    (function($) {
      "use strict";
      /*==================================================================
        [ Focus input ]*/
      $(".input100").each(function() {
        $(this).on("blur", function() {
          if (
            $(this)
              .val()
              .trim() != ""
          ) {
            $(this).addClass("has-val");
          } else {
            $(this).removeClass("has-val");
          }
        });
      });

      /*==================================================================
        [ Validate ]*/
      var input = $(".validate-input .input100");

      $(".validate-form").on("submit", function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
      });

      $(".validate-form .input100").each(function() {
        $(this).focus(function() {
          hideValidate(this);
        });
      });

      function validate(input) {
        if (
          $(input).attr("type") == "email" ||
          $(input).attr("name") == "email"
        ) {
          if (
            $(input)
              .val()
              .trim()
              .match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
              ) == null
          ) {
            return false;
          }
        } else {
          if (
            $(input)
              .val()
              .trim() == ""
          ) {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
        $(".erroe_dis").remove();
        $(".alert-validate").append(
          '<i class="material-icons erroe_dis">error</i>'
        );
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
        $(".erroe_dis").remove();
      }

      /*==================================================================
        [ Show pass ]*/
      var showPass = 0;
      $(".btn-show-pass").on("click", function() {
        if (showPass == 0) {
          $(this)
            .next("input")
            .attr("type", "text");
          $(this).addClass("active");
          showPass = 1;
        } else {
          $(this)
            .next("input")
            .attr("type", "password");
          $(this).removeClass("active");
          showPass = 0;
        }
      });
    })(jQuery);
  }
}