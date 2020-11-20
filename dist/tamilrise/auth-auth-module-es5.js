function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/loginadmin/loginadmin.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/loginadmin/loginadmin.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginadminLoginadminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"limiter\">\n    <div class=\"container-login100\">\n      <div class=\"wrap-login100\">\n        <form class=\"login100-form validate-form\">\n          <span class=\"login100-form-title p-b-45\">\n            Login\n          </span>\n          <div  style=\"height: 60px; margin-bottom: 10px;\" class=\"validate-input\" data-validate=\"Valid Username is required\">\n            <input type=\"text\" name=\"username\" id=\"username\" [formControl]=\"username\" class=\"form-control\"\n            placeholder=\"Enter Username\"  required />\n            <span class=\"focus-input100\"></span>\n          </div>\n          <div  style=\"height: 60px; margin-bottom: 10px;\" class=\"validate-input\" data-validate=\"Password is required\">\n            <input type=\"text\" name=\"password\" id=\"password\" [formControl]=\"password\" class=\"form-control\"\n              placeholder=\"Enter Password\" required />\n            <span class=\"focus-input100\"></span>\n          </div>\n          <div class=\"flex-sb-m w-full p-t-15 p-b-20\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n                <span class=\"form-check-sign\">\n                  <span class=\"check\"></span>\n                </span>\n              </label>\n            </div>\n            <div>\n              <a class=\"txt1\" routerLink=\"\">Forgot Password?</a>\n            </div>\n          </div>\n          <div class=\"container-login100-form-btn\">\n            <button type=\"submit\" class=\"login100-form-btn\" (click)=\"staffLogin()\">\n              Login\n            </button>\n  \n          </div>\n          <!-- <div class=\"text-center p-t-45 p-b-20\">\n            <span class=\"txt2\">\n              or sign up using\n            </span>\n          </div> -->\n          <!-- <div class=\"login100-form-social flex-c-m\">\n            <a href=\"#\" class=\"login100-form-social-item flex-c-m bg1 m-r-5\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a href=\"#\" class=\"login100-form-social-item flex-c-m bg2 m-r-5\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </div> -->\n        </form>\n        <div class=\"login100-more\" style=\"background-image: url('assets/images/pages/staff.png');\">\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/loginadmin/loginadmin.component */
    "./src/app/auth/loginadmin/loginadmin.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'loginadmin',
      pathMatch: 'full'
    }, {
      path: 'loginadmin',
      component: _auth_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_3__["LoginadminComponent"]
    }, {
      path: 'loginadmin',
      component: _auth_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_3__["LoginadminComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/dynamic-script-loader.service */
    "./src/app/services/dynamic-script-loader.service.ts");
    /* harmony import */


    var _app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/loginadmin/loginadmin.component */
    "./src/app/auth/loginadmin/loginadmin.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_loginadmin_loginadmin_component__WEBPACK_IMPORTED_MODULE_8__["LoginadminComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
      }, _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__["DynamicScriptLoaderService"], _app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/loginadmin/loginadmin.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/auth/loginadmin/loginadmin.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginadminLoginadminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW5hZG1pbi9sb2dpbmFkbWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/loginadmin/loginadmin.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/loginadmin/loginadmin.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginadminComponent */

  /***/
  function srcAppAuthLoginadminLoginadminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginadminComponent", function () {
      return LoginadminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginadminComponent = /*#__PURE__*/function () {
      function LoginadminComponent(request, storage, router, auth) {
        _classCallCheck(this, LoginadminComponent);

        this.request = request;
        this.storage = storage;
        this.router = router;
        this.auth = auth;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
      }

      _createClass(LoginadminComponent, [{
        key: "staffLogin",
        value: function staffLogin() {
          var _this = this;

          var credentials = {
            username: this.username.value,
            password: this.password.value
          };
          console.log("credentials", credentials);
          this.request.adminlogin(credentials).subscribe(function (response) {
            if (!response) {
              console.log("something went wrong");
              return;
            }

            if (response.status === "error") {
              console.log("error", response.msg);

              _this.storage.clear();

              return;
            }

            console.log("response", response);

            _this.storage.set(response.data);

            _this.router.navigate(["/dashboard/main"]);
          });
          console.log("login"); //this.router.navigate(['/dashboard/main']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.auth.isValidUser(true)) {
            return;
          }
        }
      }]);

      return LoginadminComponent;
    }();

    LoginadminComponent.ctorParameters = function () {
      return [{
        type: _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    LoginadminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loginadmin',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./loginadmin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/loginadmin/loginadmin.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./loginadmin.component.scss */
      "./src/app/auth/loginadmin/loginadmin.component.scss"))["default"]]
    })], LoginadminComponent);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map