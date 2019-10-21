
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';



declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = new FormControl('', Validators.email);
  public password = new FormControl('', Validators.required);

  constructor(private router: Router) {

  }

  login() {
console.log('login');
    this.router.navigate(['user-designation']);
  }

  async startScript() {
    // await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'pdfmake', 'vfs_fonts', 'pdfmake', 'buttons.html5', 'buttons.print').then(data => {
    //  // this.loadData();
    // }).catch(error => console.log(error));
  }
  ngOnInit() {


    // (function ($) {
    //     "use strict";



    //     /*==================================================================
    //     [ Focus input ]*/
    //     $('.input100').each(function () {
    //         $(this).on('blur', function () {
    //             if ($(this).val().trim() != "") {
    //                 $(this).addClass('has-val');
    //             }
    //             else {
    //                 $(this).removeClass('has-val');
    //             }
    //         })
    //     })


    //     /*==================================================================
    //     [ Validate ]*/
    //     var input = $('.validate-input .input100');

    //     $('.validate-form').on('submit', function () {
    //         var check = true;

    //         for (var i = 0; i < input.length; i++) {
    //             if (validate(input[i]) == false) {
    //                 showValidate(input[i]);
    //                 check = false;
    //             }
    //         }

    //         return check;
    //     });


    //     $('.validate-form .input100').each(function () {
    //         $(this).focus(function () {
    //             hideValidate(this);
    //         });
    //     });

    //     function validate(input) {
    //         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //             if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //                 return false;
    //             }
    //         }
    //         else {
    //             if ($(input).val().trim() == '') {
    //                 return false;
    //             }
    //         }
    //     }

    //     function showValidate(input) {
    //         var thisAlert = $(input).parent();

    //         $(thisAlert).addClass('alert-validate');
    //         $(".erroe_dis").remove();
    //         $(".alert-validate").append('<i class="material-icons erroe_dis">error</i>');
    //     }

    //     function hideValidate(input) {
    //         var thisAlert = $(input).parent();

    //         $(thisAlert).removeClass('alert-validate');
    //         $(".erroe_dis").remove();
    //     }

    //     /*==================================================================
    //     [ Show pass ]*/
    //     var showPass = 0;
    //     $('.btn-show-pass').on('click', function () {
    //         if (showPass == 0) {
    //             $(this).next('input').attr('type', 'text');
    //             $(this).addClass('active');
    //             showPass = 1;
    //         }
    //         else {
    //             $(this).next('input').attr('type', 'password');
    //             $(this).removeClass('active');
    //             showPass = 0;
    //         }

    //     });


    // })(jQuery);
}

}