(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GroupChatAppFrontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//routing 




//for Http service


//for toast message


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//for using cookies

//Importing the required files for http services.

//import { Observable } from 'rxjs';

var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'http://api-chatapp.emayurm.in.net';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    } // end constructor  
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.sendResetLink = function (email) {
        // console.log(this.url+"/api/v1/users/forgotPassword");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.url + "/api/v1/users/forgotPassword", params);
    }; // end of sendResetLink function.
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/resetPassword", params);
    }; //end resetPassword Function
    AppService.prototype.getChat = function (receiverid, skip) {
        return this.http.get(this.url + "/api/v1/chat/getGroupChat?chatRoomId=" + receiverid + "&skip=" + skip + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'));
    }; //end getChat function
    AppService.prototype.createGroup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userEmail', data.email)
            .set('roomName', data.grpname);
        return this.http.post(this.url + "/api/v1/chatRoom/createChatRoom", params);
    }; //end createGroup
    AppService.prototype.getGroups = function () {
        return this.http.get(this.url + "/api/v1/chatRoom/getChatRooms");
    }; //end getGroups
    AppService.prototype.getGroup = function (data) {
        return this.http.get(this.url + "/api/v1/chatRoom/" + data + "/getChatRoom");
    };
    AppService.prototype.editGroup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('roomName', data.roomName);
        return this.http.put(this.url + "/api/v1/chatRoom/" + data.chatRoomId + "/editChatRoom", params);
    };
    AppService.prototype.joinGroup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userEmail', data.userEmail)
            .set('chatRoomId', data.roomId);
        return this.http.post(this.url + "/api/v1/chatRoom/joinChatRoom", params);
    }; //end joinGroup
    AppService.prototype.closeGroup = function (data) {
        return this.http.get(this.url + "/api/v1/chatRoom/" + data + "/closeGroup");
    }; //end closeGroup
    AppService.prototype.sendInvite = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('userEmail', data.userEmail)
            .set('chatRoomId', data.roomId);
        return this.http.post(this.url + "/api/v1/chatRoom/sendInvite", params);
    }; //end sendInvite
    AppService.prototype.deleteGroup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('chatRoomId', data);
        return this.http.put(this.url + "/api/v1/chatRoom/deleteChatRoom", params);
    }; //end deleteGroup
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        //return Observable.throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.css":
/*!******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*navbar style*/\n.navbar-custom {\n  background-color:#42a1f4;\n \n}\n#collapsibleNavbar a:hover{\n   background-color:#E7717D;\n   color:white;\n}\n.font-adjust{\nfont-family:garamond;\nfont-weight:bold;\n\n}\n.online{\n\n  height: 10px;\n  width: 10px;\n  background-color:green;\n  border-radius: 50%;\n  display: inline-block;\n}\n.offline{\n\n  height: 10px;\n  width: 10px;\n  background-color:red;\n  border-radius: 50%;\n  display: inline-block;\n}\n.font-green{\n  color: green;\n}\n.rightSideClass {\n    float: right;\n    background: #ddd;\n    border-radius: 0.5em;\n  }\n.leftSideClass {\n    float: left;\n    background: #55C1E7;\n    border-radius: 0.5em;\n  }\n.circle-green:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: green;\n  }\n.circle-red:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: red;\n  }\n.cursorPointer {\n    cursor: pointer;\n  }\n.textCenter {\n    text-align: center;\n  }\n.floatLeft {\n    float: left;\n  }\n*,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\nbody {\n    padding: 2.5em 0;\n    color: white;\n  }\n.container {\n    margin: 0 auto;\n    background: #444753;\n    border-radius: 0.3em;\n  }\n.people-list {\n    float: left;\n  }\n.people-list input {\n    border-radius: 0.2em;\n    border: none;\n    padding: 1em;\n    color: white;\n    background: #6A6C75;\n    width: 90%;\n    font-size: 1em;\n  }\n.people-list .fa-search {\n    position: relative;\n    left: -1.8em;\n  }\n.people-list ul {\n    padding: 0;\n  }\n.people-list ul li .userPresence {\n    float: left;\n    padding: 0.7em 0.2em;\n    color: white;\n    text-transform: capitalize;\n  }\n.textCapitalize {\n    text-transform: capitalize;\n    font-size: 1.2em;\n  }\n.people-list img {\n    float: left;\n  }\n.people-list .about {\n    float: left;\n  }\n.people-list .about {\n    padding-left: 0.4em;\n  }\n.people-list .status {\n    color: #92959E;\n  }\n.chat {\n    height: 100vh;\n    float: left;\n    background: #F2F5F8;\n    border-top-right-radius: 0.3em;\n    border-bottom-right-radius: 0.3em;\n    color: #434651;\n  }\n.chat .chat-header {\n    padding: 0.2em;\n    border-bottom: 0.15em solid white;\n  }\n.chat .chat-header img {\n    float: left;\n  }\n.chat .chat-header .chat-about {\n    float: left;\n    padding-left: 0.8em;\n    margin-top: 0.4em;\n  }\n.chat .chat-header .dropdown{\n    float: right;\n  }\n.chat .chat-header .chat-with {\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n.chat .chat-header .chat-num-messages {\n    color: #92959E;\n  }\n.chat .chat-header .fa-star {\n    float: right;\n    color: #D8DADF;\n    font-size: 1.42em;\n    margin-top: 0.85em;\n  }\n.chat .chat-history {\n    padding: 2em 2em 1.42em;\n    border-bottom: 0.15em solid white;\n    overflow-y: scroll;\n    height: 80vh;\n  }\n.chat .chat-history .message-data {\n    margin-bottom: 1em;\n  }\n.chat .chat-history .message-data-time {\n    color: #a8aab1;\n    padding-left: 0.4em;\n  }\n.chat .chat-history .message {\n    color: white;\n    padding: 0.5em 1.42em;\n    line-height: 1.9em;\n    font-size: 1.1em;\n    border-radius: 7px;\n    margin-bottom: 2em;\n    width: 90%;\n    position: relative;\n  }\n.chat .chat-history .message:after {\n    bottom: 100%;\n    left: 7%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-bottom-color: #86BB71;\n    border-width: 0.8em;\n    margin-left: -0.8em;\n  }\n.chat .chat-history .my-message {\n    background: #86BB71;\n  }\n.chat .chat-history .other-message {\n    background: #94C2ED;\n  }\n.chat .chat-history .other-message:after {\n    border-bottom-color: #94C2ED;\n    left: 90%;\n  }\n.chat .chat-message textarea {\n    width: 100%;\n    border: none;\n    padding: 0.8em 1.42em;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    resize: none;\n  }\n.chat .chat-message .fa-file-o,\n  .chat .chat-message .fa-file-image-o {\n    font-size: 1.1em;\n    color: gray;\n    cursor: pointer;\n  }\n.chat .chat-message button {\n    float: right;\n    color: #94C2ED;\n    font-size: 1.1em;\n    text-transform: uppercase;\n    border: none;\n    cursor: pointer;\n    font-weight: bold;\n    background: #F2F5F8;\n  }\n.chat .chat-message button:hover {\n    color: #75b1e8;\n  }\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n.online {\n    color: #86BB71;\n  }\n.offline {\n    color: #E38968;\n  }\n.me {\n    color: #94C2ED;\n  }\n.warning {\n    color: #e78930;\n  }\n.align-left {\n    text-align: left;\n  }\n.align-right {\n    text-align: right;\n  }\n.float-right {\n    float: right;\n  }\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n  }\n.customButton {\n    width: 100%;\n  }\n.activeChat {\n    background: #393a41;\n  }\n.typeOfChats {\n    background: #393a41;\n    color: white;\n    margin-top: 0.2em;\n    margin-bottom: 0.2em;\n  }\n.blankContent{\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: #999;\n  }\n@media only screen and (max-width:575px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n@media only screen and (min-width:576px) and (max-width:768px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n@media only screen and (min-width:769px) and (max-width:992px) {\n    .chat .chat-history {\n      height:65vh;\n    }\n  }\n@media only screen and (min-width:993px) and (max-width:1200  px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n/* user list items */\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  text-align: center;\n  margin: 0em;\n  width: 3em;\n  height: 3em;\n  float: left;\n  text-transform: uppercase;\n}\n.about {\n  float: left;\n  padding-left: 0.4em;\n}\n.online,\n.offline,\n.me,\n.warning {\n  margin-right: 3px;\n  font-size: 0.8em;\n}\n.online {\n  color: #86BB71;\n}\n.offline {\n  color: #E38968;\n}\n.me {\n  color: #94C2ED;\n}\n.warning {\n  color: #00c8e7;\n}\n.status {\n  color: #92959E;\n}\n.name {\n  float: left;\n}"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.html":
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mycontent\">\n  <nav class=\"navbar navbar-expand-md navbar-custom navbar-dark\">\n    <div class=\"container-fluid\" style=\"border: 2px black solid\">\n      <a class=\"navbar-brand font-adjust\" href=\"\">Group Chat Application\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span></span>\n        <i class=\"fa fa-ellipsis-v text-dark\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li>\n            <!-- Button trigger modal -->\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n              Create Group\n            </button>\n\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body\">\n                    \n                    <form #CreateGroupForm=\"ngForm\" (ngSubmit)=\"createGroup()\">\n                      <div class=\"form-group\">\n                        <label style=\"color: black\">Group Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"groupName\" [(ngModel)]=\"groupName\" #groupName1=\"ngModel\" placeholder=\"Enter Group Name\" required>\n                      </div>\n                      <div [hidden]='groupName1.valid || groupName1.pristine' class=\"alert alert-danger\">\n                        Group name is required\n                      </div>\n              \n                      <button type=\"submit\" class=\"btn btn-block btn-success\">Create Group</button>\n                    </form>\n            \n\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n\n          <li class=\"nav-item\">\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal3\" (click)=\"logout()\">\n              Logout\n            </button>\n\n          </li>\n\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- navbar end -->\n\n\n  <div class=\"container\" style=\"border: 2px black solid\">\n    <div class=\"row\">\n  \n      <div class=\"displayBlockMobile d-block d-sm-none\" style=\"width:100%;z-index:1;\">\n  \n        <div class=\"col-sm-12 p-0\">\n  \n          <nav class=\"navbar navbar-expand-md  navbar-dark bg-dark\">\n  \n            <a class=\"navbar-brand text-white\">\n              {{userInfo.firstName}} {{userInfo.lastName}}\n              <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n              <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n            </a>\n  \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n              <span class=\"navbar-toggler-icon\"></span>\n  \n            </button>\n  \n            <div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n             <!-- <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>-->\n              <ul class=\"list\">\n                <li class=\"p-2 typeOfChats\">\n                  Groups joined:\n                </li>\n                <li class=\"clearfix cursorPointer\" *ngFor=\"let group of groupsJoined\" (click)=\"userSelectedToChat(group.roomId, group.roomName, group.admin)\">\n                  <div class=\"userPresence\" [hidden]=\"!group.status\">\n                    <user-details [userFirstName]=\"group.roomName\" [userLastName]=\"''\" [userStatus]=\"'Active'\" [messageRead]=\"false\"></user-details>\n                  </div>\n                </li>\n                <li class=\"p-2 typeOfChats\">\n                  Other Groups:\n                </li>\n                <li class=\"clearfix cursorPointer\" *ngFor=\"let group of otherGroups\" (click)=\"groupSelectedToChat(group.roomId,group.roomName)\">\n                  <div class=\"userPresence\" [hidden]=\"!group.status\">\n                    <user-details [userFirstName]=\"group.roomName\" [userLastName]=\"''\" [userStatus]=\"'Active'\" [messageRead]=\"false\"></user-details>\n                  </div>\n                </li>\n              </ul>\n  \n            </div>\n  \n          </nav>\n  \n        </div>\n  \n      </div>\n  \n      <div class=\"col-12 displayNoneMobile d-none d-sm-block col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n  \n        <div class=\"p-3 text-white textCapitalize textCenter\">\n          {{userInfo.firstName}} {{userInfo.lastName}}\n          <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n          <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          <br>\n          <br>\n         <!-- <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button> -->\n        </div>\n\n  \n        <ul class=\"list\">\n          <li class=\"p-2 typeOfChats\">\n            Groups joined:\n          </li>\n          <li class=\"clearfix cursorPointer\" *ngFor=\"let group of groupsJoined\" (click)=\"userSelectedToChat(group.roomId, group.roomName, group.admin)\">\n            <div class=\"userPresence\" [hidden]=\"!group.status\">\n              <user-details [userFirstName]=\"group.roomName\" [userLastName]=\"''\" [userStatus]=\"'Active'\" [messageRead]=\"false\"></user-details>\n            </div>\n          </li>\n          <li class=\"p-2 typeOfChats\">\n            Other Groups:\n          </li>\n          <li class=\"clearfix cursorPointer\" *ngFor=\"let group of otherGroups\" (click)=\"groupSelectedToChat(group.roomId,group.roomName)\">\n            <div class=\"userPresence\" [hidden]=\"!group.status\">\n              <user-details [hidden]=\"!group.status\" [userFirstName]=\"group.roomName\" [userLastName]=\"''\" [userStatus]=\"'Active'\" [messageRead]=\"false\"></user-details>\n            </div>\n          </li>\n        </ul>\n  \n  \n      </div>\n  \n      <div class=\"col-12 col-sm-8 col-md-8 chat \">\n        <div class=\"chat-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n          <first-char class=\"cursorPointer\" [name]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\" (notify)=\"showGroupName($event)\"></first-char>\n  \n          <div class=\"chat-about\">\n            <div class=\"chat-with\">Chat with {{receiverName}}</div>\n            <div class=\"chat-with font-green\" *ngIf='personTyping'>{{personTyping}} is typing...</div>\n          </div>\n          <div class=\"dropdown\" [hidden]='groupMember'>\n            <button class=\"btn btn-secondary\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-ellipsis-v\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n              <form class=\"px-4 py-3\" #InviteForm (ngSubmit)=\"sendInvite()\">\n                <div class=\"form-group\">\n                  <label for=\"exampleDropdownFormEmail1\">Email address</label>\n                  <input type=\"email\" class=\"form-control\" name=\"userMail\" [(ngModel)]=\"userMail\" #userMail1=\"ngModel\" placeholder=\"email@example.com\"\n                    required>\n                </div>\n                <div [hidden]='userMail1.valid || userMail1.pristine' class=\"alert alert-danger\">\n                  Email is required\n                </div>\n                <button type=\"submit\" class=\"btn btn-block btn-primary\">Invite</button>\n              </form>\n              <a class=\"dropdown-item btn\" routerLink=\"/groupDetails/{{receiverId}}\">Group Details</a>\n              <a class=\"dropdown-item btn\" (click)=\"closeGroup()\">Close Group</a>\n              <a class=\"dropdown-item btn\" (click)=\"deleteGroup()\">Delete Group</a>\n            </div>\n          </div>\n        </div>\n        <!-- end chat-header -->\n  \n        <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n  \n          <ul [hidden]='groupMember'>\n            <li class=\"textCenter\" *ngIf=\"receiverName\">\n  \n              <span class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n  \n              <br>\n  \n              <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n  \n            </li>\n            <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n  \n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message }}\n              </div>\n            </li>\n  \n          </ul>\n  \n        </div>\n        <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n          Click on Group to start a GroupChat!!!\n        </div>\n        <!-- end chat-history -->\n  \n        <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\" [hidden]='groupMember'>\n\n          <div class=\"row\"> \n              <div class=\"col-10\">\n                  <textarea name=\"message-to-send\" id=\"message-to-send\" (keypress)=\"userTyping($event)\" (keydown)=\"sendMessageUsingKeypress($event)\"\n                  [(ngModel)]=\"messageText\" placeholder=\"Type your message\"></textarea>\n              </div>\n              <div class=\"col-1\">\n                <!--  <i class=\"fas fa-play\" (click)=\"sendMessage()\"></i>-->\n                <!--<button (click)=\"sendMessage()\">Send</button>-->\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\n              </div>\n            </div>\n  \n        </div>\n        <!-- end chat-message -->\n        <!--Join Group Button-->\n        <button class=\"btn btn-primary btn-block\" [hidden]=\"!groupMember\" (click)=\"joinGroup(receiverName,receiverId)\">Join Group</button>\n      </div>\n  \n    </div>\n    <!-- end chat -->\n  \n  </div>\n  <!-- end container -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(AppService, SocketService, router, toastr) {
        var _this = this;
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.userList = [];
        this.groupsJoined = [];
        this.otherGroups = [];
        this.groupMember = false;
        this.scrollToChatTop = false;
        this.previousChatList = [];
        this.messageList = []; // stores the current message list display in chat box
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            }); //end subscribe
        }; //end verifyUserConfirmation
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.userList = [];
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'name': userListfromdb[x], 'unread': 0, 'chatting': false };
                    _this.userList.push(temp);
                }
            }); //end subscribe
        }; //end getOnlineUserList
        // chat related methods 
        this.groupCreated = function () {
            _this.SocketService.groupCreated()
                .subscribe(function (data) {
                _this.toastr.info("Group Created: " + data, "Update");
                _this.loadGroup();
            }); //end subscribe
        }; //end GroupCreated
        this.groupRemoved = function () {
            _this.SocketService.groupRemoved()
                .subscribe(function (data) {
                _this.toastr.info("Group Removed: " + data, "Update");
                _this.loadGroup();
            }); //end subscribe
        }; //end GroupRemoved
        this.getPreviousChatWithAUser = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.AppService.getChat(_this.receiverId, _this.pageValue)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                }
                _this.loadingPreviousChat = false;
            }, function (err) {
                _this.toastr.error('some error occured', "Error!");
            });
        }; //end getPreviousChatWithAUser
        this.loadEarlierPageOfChat = function () {
            _this.loadingPreviousChat = true;
            _this.pageValue++;
            _this.scrollToChatTop = true;
            _this.getPreviousChatWithAUser();
        }; //end loadPreviousChat
        this.userSelectedToChat = function (id, name) {
            _this.groupMember = false;
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', id);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', name);
            _this.receiverId = id;
            _this.receiverName = name;
            _this.messageList = [];
            _this.pageValue = 0;
            _this.scrollToChatTop = false;
            var chatDetails = {
                userId: _this.userInfo.userId,
                senderId: id
            };
            //this.SocketService.markChatAsSeen(chatDetails);
            _this.getPreviousChatWithAUser();
        }; // end userBtnClick function
        this.groupSelectedToChat = function (id, name) {
            _this.groupMember = true;
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', id);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', name);
            _this.receiverId = id;
            _this.receiverName = name;
        }; //end groupSelectedToChat
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        this.userTyping = function (event) {
            var data = {};
            data.room = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
            data.userName = _this.userInfo.firstName;
            if (event.keyCode) {
                _this.SocketService.userTyping(data);
            }
        }; //end userTyping
        this.typing = function () {
            _this.SocketService.typingInRoom()
                .subscribe(function (data) {
                if (_this.receiverId === data.room) {
                    _this.personTyping = data.userName;
                }
                setTimeout(function () {
                    _this.personTyping = "";
                }, 2000);
            }); //end subscribe
        }; //end typing
        this.createGroup = function () {
            if (_this.groupName === "" || _this.groupName === null || _this.groupName === undefined) {
                _this.toastr.warning("Group Name required", "Warning!");
            }
            else {
                var data_1 = {};
                data_1.email = _this.userInfo.email;
                data_1.grpname = _this.groupName;
                _this.groupName = " ";
                _this.AppService.createGroup(data_1)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Group: " + data_1.grpname + " created", "Successfully!");
                        _this.userInfo.groups.push(apiResponse.data.roomId);
                        _this.AppService.setUserInfoInLocalStorage(_this.userInfo);
                        _this.loadGroup();
                        _this.SocketService.groupAdded(data_1.grpname);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error("Some error Occurred", "Error!");
                }); //end subscribe
            } //end else
        }; //end createGroup
        this.loadGroup = function () {
            _this.AppService.getGroups().subscribe(function (apiResponse) {
                _this.otherGroups = [];
                _this.groupsJoined = [];
                if (apiResponse.status == 200) {
                    for (var _i = 0, _a = apiResponse.data; _i < _a.length; _i++) {
                        var group = _a[_i];
                        var flag = false;
                        for (var _b = 0, _c = _this.userInfo.groups; _b < _c.length; _b++) {
                            var userGroupId = _c[_b];
                            if (group.roomId === userGroupId && group.status != false) {
                                _this.groupsJoined.push(group);
                                flag = true;
                                break;
                            } //end if
                        } //end inner for
                        if (!flag && group.status != false) {
                            _this.otherGroups.push(group);
                        }
                        if (_this.userInfo.groups.length === 0) {
                            _this.otherGroups = apiResponse.data;
                            break;
                        }
                    } //end external for loop
                } //end if for success
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                } //end else if error
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            }); //end subscribe 
        }; //end loadGroup
        this.joinGroup = function (name, id) {
            var data = {};
            data.userEmail = _this.userInfo.email;
            data.roomId = id;
            data.userId = _this.userInfo.userId;
            _this.AppService.joinGroup(data).subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status == 200) {
                    _this.toastr.success("Chat Group: " + name + " Joined", "Success!");
                    _this.userInfo.groups.push(id);
                    _this.AppService.setUserInfoInLocalStorage(_this.userInfo);
                    _this.loadGroup();
                    _this.SocketService.joinGroup(data);
                    _this.userSelectedToChat(id, name);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.toastr.error("Some error occurred", "Error!");
            }); //end subscribe
        }; //end joinGroup
        this.closeGroup = function () {
            _this.AppService.closeGroup(_this.receiverId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.SocketService.groupClosed(_this.receiverName);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', _this.userInfo.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', "");
                    _this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
                    _this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
                    _this.userSelectedToChat(_this.receiverId, _this.receiverName);
                }
                else {
                    _this.toastr.error(apiResponse.message, '!Error');
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            }); //end subscribe
        }; //end closeGroup
        this.refreshGroups = function () {
            _this.SocketService.closedGroup()
                .subscribe(function (data) {
                _this.toastr.info("Group Closed: " + data, "Update");
                _this.loadGroup();
            }); //end subscribe
        }; //end refreshGroups
        this.sendInvite = function () {
            var data = {};
            data.userEmail = _this.userMail;
            data.roomId = _this.receiverId;
            _this.AppService.sendInvite(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.info("Mail Sent to: " + data.userEmail, "Update");
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            }); //end subscribe
        }; //end sendInvite
        this.deleteGroup = function () {
            _this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
            _this.AppService.deleteGroup(_this.receiverId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.SocketService.groupDeleted(_this.receiverName);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', _this.userInfo.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', "");
                    _this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
                    _this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
                    _this.userSelectedToChat(_this.receiverId, _this.receiverName);
                }
            }); //end subscribe
        }; //end deleteGroup
        this.sendMessage = function () {
            if (_this.messageText) {
                var chatMsgObject = {
                    senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName'),
                    receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end chatMsgObject
                console.log(chatMsgObject);
                _this.SocketService.SendChatMessage(chatMsgObject);
                _this.pushToChatWindow(chatMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        this.pushToChatWindow = function (data) {
            _this.messageText = "";
            _this.messageList.push(data);
            _this.scrollToChatTop = false;
        }; //end pushToChatWindow
        this.getMessageFromAGroup = function () {
            _this.SocketService.groupChatMessage()
                .subscribe(function (data) {
                if (data.receiverId === _this.receiverId && data.senderId != _this.userInfo.userId) {
                    _this.messageList.push(data);
                }
                console.log(data);
                _this.toastr.success(data.senderName + " says : " + data.message);
                _this.scrollToChatTop = false;
            }); //end subscribe
        }; //end getMessageFromAGroup
        /*
         public getMessageFromAUser: any =()=>{
        
          this.SocketService.chatByUserId(this.userInfo.userId)
          .subscribe((data)=>{
           
        
            (this.receiverId==data.senderId)?this.messageList.push(data):'';
        
            this.toastr.success(`${data.senderName} says : ${data.message}`)
        
            this.scrollToChatTop=false;
        
          });//end subscribe
        }// end get message from a user
        
        
        */
        /*
        
        public groupJoined: any =()=>{
        
          this.SocketService.groupJoined()
          .subscribe((data)=>{
           
            this.toastr.success(` joined`)
        
            this.scrollToChatTop=false;
        
          });//end subscribe
        }// end get message from a user
        */
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
        // handle the output from a child component 
        this.showGroupName = function (name) {
            _this.toastr.success("You are chatting with " + name);
        };
    }
    ChatBoxComponent.prototype.ngOnChanges = function (changes) {
        throw new Error("Method not implemented.");
    };
    ChatBoxComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        console.log(this.receiverId, this.receiverName);
        if (this.receiverId != null && this.receiverId != undefined && this.receiverId != '') {
            this.userSelectedToChat(this.receiverId, this.receiverName);
        }
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.loadGroup();
        // this.getMessageFromAUser();
        this.getMessageFromAGroup();
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('callMethod')) {
            this.groupSelectedToChat(this.receiverId, this.receiverName);
        }
        this.groupCreated();
        this.groupRemoved();
        this.refreshGroups();
        this.typing();
        //  this.joinGroup(this.receiverId, this.receiverName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatBoxComponent.prototype, "scrollMe", void 0);
    ChatBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-box',
            template: __webpack_require__(/*! ./chat-box.component.html */ "./src/app/chat/chat-box/chat-box.component.html"),
            styles: [__webpack_require__(/*! ./chat-box.component.css */ "./src/app/chat/chat-box/chat-box.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-group-details/chat-group-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/chat/chat-group-details/chat-group-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat-group-details/chat-group-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/chat/chat-group-details/chat-group-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row\" style=\"text-align:center\">\n\n    <div class=\"col-12\">\n\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>\n            <strong>Chat Group Name : {{roomName}}</strong>\n          </h3>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Members</h4>\n          <hr>\n          <div *ngFor=\"let member of members\">\n            <div>{{member.name}}</div>\n          </div>\n          <br>\n          <hr>\n          <br>\n          <div *ngIf=\"admin\">\n              <h4 class=\"card-title\">Admin</h4>\n              <hr>      \n                <div>{{admin.name}}</div>\n              <br>\n              <hr>\n              <br>\n          </div>\n          \n          \n          \n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-primary\" [routerLink]=\"['/editGroupDetails',receiverId]\">Edit</a>\n            </div>\n\n            <br><br>\n\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n    </div>\n\n\n  </div>\n  <hr>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/chat/chat-group-details/chat-group-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/chat/chat-group-details/chat-group-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChatGroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatGroupDetailsComponent", function() { return ChatGroupDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatGroupDetailsComponent = /** @class */ (function () {
    function ChatGroupDetailsComponent(route, router, appService, toastr, location) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.location = location;
        this.members = [];
    }
    ChatGroupDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receiverId = this.route.snapshot.paramMap.get('receiverId');
        console.log(this.receiverId);
        this.appService.getGroup(this.receiverId)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.members = apiResponse.data.members;
                console.log(_this.members);
                _this.roomName = apiResponse.data.roomName;
                console.log(_this.roomName);
                _this.admin = apiResponse.data.admin;
                console.log(apiResponse);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            _this.toastr.error("Some Error Occurred", "Error!");
        }); //end subscribe
    };
    ChatGroupDetailsComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    ChatGroupDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-group-details',
            template: __webpack_require__(/*! ./chat-group-details.component.html */ "./src/app/chat/chat-group-details/chat-group-details.component.html"),
            styles: [__webpack_require__(/*! ./chat-group-details.component.css */ "./src/app/chat/chat-group-details/chat-group-details.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ChatGroupDetailsComponent);
    return ChatGroupDetailsComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-group-join/chat-group-join.component.css":
/*!********************************************************************!*\
  !*** ./src/app/chat/chat-group-join/chat-group-join.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat-group-join/chat-group-join.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/chat/chat-group-join/chat-group-join.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat-group-join works!\n</p>\n"

/***/ }),

/***/ "./src/app/chat/chat-group-join/chat-group-join.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/chat/chat-group-join/chat-group-join.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatGroupJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatGroupJoinComponent", function() { return ChatGroupJoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatGroupJoinComponent = /** @class */ (function () {
    function ChatGroupJoinComponent(router, _route) {
        this.router = router;
        this._route = _route;
    }
    ChatGroupJoinComponent.prototype.ngOnInit = function () {
        var receiverId = this._route.snapshot.paramMap.get('receiverId');
        var receiverName = this._route.snapshot.paramMap.get('receiverName');
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', receiverId);
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', receiverName);
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('callMethod', 'true');
        this.router.navigate(['/chat']);
    };
    ChatGroupJoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-group-join',
            template: __webpack_require__(/*! ./chat-group-join.component.html */ "./src/app/chat/chat-group-join/chat-group-join.component.html"),
            styles: [__webpack_require__(/*! ./chat-group-join.component.css */ "./src/app/chat/chat-group-join/chat-group-join.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ChatGroupJoinComponent);
    return ChatGroupJoinComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-route-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/chat/chat-route-guard.service.ts ***!
  \**************************************************/
/*! exports provided: ChatRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRouteGuardService", function() { return ChatRouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatRouteGuardService = /** @class */ (function () {
    function ChatRouteGuardService(router) {
        this.router = router;
    }
    ChatRouteGuardService.prototype.canActivate = function (route) {
        console.log("in guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    ChatRouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChatRouteGuardService);
    return ChatRouteGuardService;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat/chat-box/chat-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/pipe/remove-special-char.pipe */ "./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var _chat_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-route-guard.service */ "./src/app/chat/chat-route-guard.service.ts");
/* harmony import */ var _chat_group_join_chat_group_join_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-group-join/chat-group-join.component */ "./src/app/chat/chat-group-join/chat-group-join.component.ts");
/* harmony import */ var _chat_group_details_chat_group_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-group-details/chat-group-details.component */ "./src/app/chat/chat-group-details/chat-group-details.component.ts");
/* harmony import */ var _edit_chat_group_details_edit_chat_group_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-chat-group-details/edit-chat-group-details.component */ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//for toast message







var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'chat', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"], canActivate: [_chat_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["ChatRouteGuardService"]] },
                    { path: 'joinGroup/:receiverId/:receiverName', component: _chat_group_join_chat_group_join_component__WEBPACK_IMPORTED_MODULE_9__["ChatGroupJoinComponent"], canActivate: [_chat_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["ChatRouteGuardService"]] },
                    { path: 'groupDetails/:receiverId', component: _chat_group_details_chat_group_details_component__WEBPACK_IMPORTED_MODULE_10__["ChatGroupDetailsComponent"] },
                    { path: 'editGroupDetails/:receiverId', component: _edit_chat_group_details_edit_chat_group_details_component__WEBPACK_IMPORTED_MODULE_11__["EditChatGroupDetailsComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"], _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_7__["RemoveSpecialCharPipe"], _chat_group_join_chat_group_join_component__WEBPACK_IMPORTED_MODULE_9__["ChatGroupJoinComponent"], _chat_group_details_chat_group_details_component__WEBPACK_IMPORTED_MODULE_10__["ChatGroupDetailsComponent"], _edit_chat_group_details_edit_chat_group_details_component__WEBPACK_IMPORTED_MODULE_11__["EditChatGroupDetailsComponent"]],
            providers: [_chat_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["ChatRouteGuardService"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }"

/***/ }),

/***/ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"input-group mb-3\">\n  \n  <input #userName1=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]='roomName' required>\n  <div [hidden]=\"userName1.pristine || userName1.valid\" class=\"alert alert-danger\" role=\"alert\">\n    Group Name Required\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChatRoomName()\">Save</button>\n</div>\n-->\n<!--\n<div class=\"container\">\n  <h3>Edit Chat Room</h3>\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-3 input-group\">\n\n\n\n        <div>\n          <label>Name Room Title</label>\n          <input #userName1=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"Enter Room Name\" aria-label=\"RoomName\" aria-describedby=\"basic-addon1\" [(ngModel)]='roomName' required>\n        </div>\n\n        <div [hidden]=\"userName1.valid || userName1.pristine\" class=\"alert alert-danger\" role=\"alert\">\n          Room name is required\n        </div>  \n        \n\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"saveChatRoomName()\">Save Changes</button>\n\n    </div>\n\n  </div>\n\n</div>\n-->\n\n<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row\" style=\"text-align:center\">\n\n    <div class=\"col-12\">\n\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>\n            <strong>\n\n              <div>\n                <label>Group Name</label>\n                <input #userName1=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"Enter Group Name\" aria-label=\"RoomName\" aria-describedby=\"basic-addon1\"\n                  [(ngModel)]='roomName' required>\n              </div>\n\n              <div [hidden]=\"userName1.valid || userName1.pristine\" class=\"alert alert-danger\" role=\"alert\">\n                Group name is required\n              </div>\n\n\n            </strong>\n          </h3>\n        </div>\n        <div class=\"card-body row\">\n\n          <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"saveChatRoomName()\">Save Changes</button>\n          </div>\n\n          <div class=\"col-md-6\">\n            <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditChatGroupDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChatGroupDetailsComponent", function() { return EditChatGroupDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditChatGroupDetailsComponent = /** @class */ (function () {
    function EditChatGroupDetailsComponent(route, router, appService, toastr, location) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.location = location;
        this.members = [];
    }
    EditChatGroupDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var receiverId = this.route.snapshot.paramMap.get('receiverId');
        this.roomId = receiverId;
        this.appService.getGroup(receiverId)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.members = apiResponse.data.members;
                console.log(_this.members);
                _this.roomName = apiResponse.data.roomName;
                console.log(_this.roomName);
                _this.admin = apiResponse.data.admin;
                console.log(apiResponse);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            _this.toastr.error("Some Error Occurred", "Error!");
        }); //end subscribe
    };
    EditChatGroupDetailsComponent.prototype.saveChatRoomName = function () {
        var _this = this;
        var data = {};
        data.chatRoomId = this.roomId;
        data.roomName = this.roomName;
        console.log(data);
        this.appService.editGroup(data)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Group Name Changed");
                _this.router.navigate(['/chat']);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('receiverName', data.roomName);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            _this.toastr.error("Some Error Occurred", "Error!");
        }); //end subscribe
    }; //end saveName
    EditChatGroupDetailsComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    EditChatGroupDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-chat-group-details',
            template: __webpack_require__(/*! ./edit-chat-group-details.component.html */ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.html"),
            styles: [__webpack_require__(/*! ./edit-chat-group-details.component.css */ "./src/app/chat/edit-chat-group-details/edit-chat-group-details.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], EditChatGroupDetailsComponent);
    return EditChatGroupDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.name;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/remove-special-char.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RemoveSpecialCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpecialCharPipe", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveSpecialCharPipe = /** @class */ (function () {
    function RemoveSpecialCharPipe() {
    }
    RemoveSpecialCharPipe.prototype.transform = function (value, character) {
        return value.replace(character, '');
    };
    RemoveSpecialCharPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeSpecialCharPipe'
        })
    ], RemoveSpecialCharPipe);
    return RemoveSpecialCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"]],
            exports: [
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"],
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n  \n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n  \n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n  \n  .online {\n    color: #86BB71;\n  }\n  \n  .offline {\n    color: #E38968;\n  }\n  \n  .me {\n    color: #94C2ED;\n  }\n  \n  .warning {\n    color: #00c8e7;\n  }\n  \n  .status {\n    color: #92959E;\n  }\n  \n  .name {\n    float: left;\n  }"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>\n<div class=\"about\">\n  <div class=\"name\">{{userFirstName}} {{userLastName}}\n    <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n  </div>\n  <div class=\"status\">\n    <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    }; // end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://api-chatapp.emayurm.in.net';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.authError = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('auth-error', function (data) {
                    observer.next(data);
                }); //end socket
            }); //end observer
        }; //end authError
        this.typingInRoom = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("typing", function (data) {
                    observer.next(data);
                }); //endsocket 
            }); //end Observable
        }; //end typingInRoom
        this.groupCreated = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("GroupCreated", function (data) {
                    observer.next(data);
                }); //endsocket 
            }); //end Observable
        }; //end activeInRoom
        this.closedGroup = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("closedGroup", function (data) {
                    observer.next(data);
                }); //endsocket 
            }); //end Observable
        }; //end activeInRoom
        this.groupRemoved = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("GroupRemoved", function (data) {
                    observer.next(data);
                }); //endsocket 
            }); //end Observable
        }; //end activeInRoom
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        //end event to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.groupAdded = function (data) {
            _this.socket.emit("newGroup", data); //endsocket 
        }; //end Group Added
        this.groupClosed = function (data) {
            _this.socket.emit("GroupClosed", data); //endsocket 
        }; //end Group Closed
        this.joinGroup = function (data) {
            _this.socket.emit(data.userId, data);
        }; //end joinGroup
        this.userTyping = function (data) {
            _this.socket.emit("userTyping", data);
        }; //end userTyping
        this.groupDeleted = function (data) {
            _this.socket.emit("GrpDeleted", data); //endsocket 
        }; //end Group Deleted
        // end events to be emitted
        // chat related methods 
        this.chatByUserId = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end chatByUserId
        this.SendChatMessage = function (chatMsgObject) {
            console.log(chatMsgObject);
            _this.socket.emit('chat-msg', chatMsgObject);
        }; // end getChatMessage
        this.groupChatMessage = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('message', function (data) {
                    console.log(data);
                    observer.next(data);
                }); //end socket
            }); //end observable
        }; //end groupChatMessage
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">GroupChat App</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">GroupChat Sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"sendResetLinkFunction()\">Send Reset Link</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.sendResetLinkFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email address');
            }
            _this.appService.sendResetLink(_this.email)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Link Sent SuccessFully", "Success!");
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error! Try Again");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
            });
        }; //end of sendResetLink 
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    }; //end goToSignUp
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">SignUp</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n\n    <a [routerLink]=\"['/forgetPassword']\">Forgot Password ?</a>\n\n    <br><br>\n\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        //    Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/chat']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('Incorrect email Id or password');
                });
            } // end condition
        }; // end signinFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">GroupChat App</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Password Reset</h2>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Confirm Password</label>\n\n    <input type=\"password\" id=\"inputPassword1\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"resetPassword()\">Change Password</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.data = {};
        this.resetPassword = function () {
            if (_this.matchPassword()) {
                _this.data.userId = _this.userId;
                _this.data.password = _this.password;
                _this.appService.resetPassword(_this.data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Password Reset Succesfull", "Success!");
                        setTimeout(function () {
                            _this.router.navigate(['/']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error("Some Error Occurred", "Error!");
                });
            }
            else {
                _this.toastr.error("Password Mismatch", "Error!");
            }
        };
        this.matchPassword = function () {
            if (_this.password === _this.confirmPassword) {
                return true;
            }
            else {
                return false;
            }
        }; //end matchPassword
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignIn()\">SignIn</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Start Chat</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n\n    <span>Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n    <input type=\"number\" id=\"inputMobileNumber\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile Number\" required>\n\n    <br>\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import for toastr

//import for Routing
var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.mobileNumber) {
                _this.toastr.warning('enter mobile');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobileNumber: _this.mobileNumber,
                    email: _this.email,
                    password: _this.password,
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signed up', 'Successful..!');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message, 'error occured');
                    }
                }, function (err) {
                    _this.toastr.error('Try Again', 'Error!');
                });
            } // end condition
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//for toast message




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                    { path: 'forgetPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"] },
                    { path: 'resetPassword/:userId', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] }
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MAYUR MAHAMUNE\Desktop\chatappfolder\GroupChatApplicationFrontend-master\GroupChatApplicationFrontend-master\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map