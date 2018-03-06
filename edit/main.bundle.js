webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    //MUST BE LAST
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <nav class=\"\" id=\"sidebar\">\r\n    <app-list></app-list>\r\n  </nav>\r\n  <div id = \"content\" style=\"width:100%; padding-right: 10px;\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.currentPost = {
            postid: 1,
            created: new Date(),
            modified: new Date(),
            title: 'title',
            body: 'body'
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__["a" /* PreviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__("../../../../jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    }),
    withCredentials: true,
    responseType: 'text'
};
var updateFail = false;
var postFail = false;
var deleteFail = false;
var BlogService = /** @class */ (function () {
    function BlogService(http, flash) {
        this.http = http;
        this.flash = flash;
        this.posts = [];
        this.PostCount = 1;
        this.PostCountName = "#PostCount";
        this.PostBaseName = "#Post";
        this.fetchPosts();
    }
    BlogService.prototype.postToString = function (post) {
        return JSON.stringify(post);
    };
    BlogService.prototype.stringToPost = function (s) {
        return JSON.parse(s);
    };
    BlogService.prototype.fetchPostsCallBack = function (data) {
        var _this = this;
        data.forEach(function (x) { return _this.posts.push(x); });
        this.PostCount = this.posts[this.posts.length - 1].postid + 1;
    };
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/' + this.getUsername())
            .subscribe(function (data) { return _this.fetchPostsCallBack(data); });
    };
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    BlogService.prototype.getPost = function (id) {
        return this.posts.filter(function (x) { return x.postid == id; })[0];
    };
    BlogService.prototype.getUsername = function () {
        var cookie = document.cookie;
        cookie = cookie.substr(cookie.indexOf("=") + 1);
        console.log(cookie);
        var decodedCookie = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__["decode"](cookie, { complete: true });
        console.log('Cookie Header: ' + JSON.stringify(decodedCookie.header));
        console.log('Cookie Payload: ' + JSON.stringify(decodedCookie.payload));
        console.log('We think username is: ' + decodedCookie.payload.usr);
        return decodedCookie.payload.usr;
    };
    BlogService.prototype.newPost = function () {
        var _this = this;
        var p = new Post();
        p.title = 'Title';
        p.body = 'Body';
        p.modified = new Date(Date.now());
        p.created = new Date(Date.now());
        p.postid = this.PostCount;
        //clear time format issues
        p = this.stringToPost(this.postToString(p));
        this.posts.push(p);
        var body = JSON.stringify(p);
        console.log(body);
        this.PostCount++;
        this.http.post('http://localhost:3000/api/' + this.getUsername() + '/' + String(p.postid), body, httpOptions).
            subscribe(function (response) {
            if (response != "200")
                _this.flash.show('Failed to create post', { timeout: 1000 });
        });
        ;
        return p;
    };
    BlogService.prototype.updatePost = function (post) {
        var _this = this;
        post.modified = new Date(Date.now());
        this.http.put('http://localhost:3000/api/' + this.getUsername() + '/' + String(post.postid), post, httpOptions)
            .subscribe(function (response) {
            if (response != "201")
                _this.flash.show('Failed to update post', { timeout: 1000 });
        });
        //localStorage.setItem(this.PostBaseName +  String(post.postid), this.postToString(post));
    };
    BlogService.prototype.deletePost = function (postid) {
        var _this = this;
        this.http.delete('http://localhost:3000/api/' + this.getUsername() + '/' + String(postid))
            .subscribe(function (response) {
            if (response != "200")
                _this.flash.show('Failed to delete post', { timeout: 1000 });
        });
        this.posts.splice(this.posts.findIndex(function (x) { return x.postid == postid; }), 1);
        //console.log("Size adfter: " + this.posts.length);
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"post\">\r\n    <div class=\"card\" style=\"max-width: 50rem;\">\r\n        <div class=\"card-header\">\r\n            <h3>Edit</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"form-group\">\r\n                <label>Title</label>\r\n                <input type=\"text\" [(ngModel)]=\"post.title\" (input)=\"isSaveEnabled()\" class=\"form-control\"  placeholder=\"Title\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Body</label>\r\n                <textarea id=\"textareabox\" class=\"form-control\" rows=\"10\" placeholder=\"Body\" required [(ngModel)]=\"post.body\"  (input)=\"isSaveEnabled()\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Last Modified: {{ post.modified | date: 'medium' }}</label>\r\n            </div>\r\n            <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n            <button class=\"btn btn-success btn-sm\" id=\"save\" type=\"button\" [disabled]=\"!saveEnabled\" (click)=\"save()\">Save</button>\r\n            <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"preview()\">Preview</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.saveEnabled = false;
    }
    EditComponent.prototype.isSaveEnabled = function () {
        this.saveEnabled = this.post != null && JSON.stringify(this.postOriginal) != JSON.stringify(this.post);
    };
    EditComponent.prototype.saveUncommited = function () {
        //check that this no null
        if (this.post != null && JSON.stringify(this.postOriginal) != JSON.stringify(this.post)) {
            this.blogService.updatePost(this.post);
            //console.log("Saved Changes");
        }
        else {
            //console.log("No changes to save")
        }
    };
    EditComponent.prototype.save = function () {
        //console.log("Calling save...")
        this.blogService.updatePost(this.post);
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.post.postid);
        this.router.navigate(["/"]);
    };
    EditComponent.prototype.preview = function () {
        this.saveUncommited();
        this.router.navigate(["/preview/" + this.post.postid]);
    };
    EditComponent.prototype.initializeState = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(id);
        if (this.post == null) {
            this.router.navigate(['/']);
        }
        else {
            //b/c javascript doesn't do deep copies
            this.postOriginal = JSON.parse(JSON.stringify(this.post));
            this.isSaveEnabled();
        }
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.post != null) {
                //console.log("calling saveUncommitted");
                _this.saveUncommited();
            }
            // reset and set based on new parameter this time
            _this.initializeState();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "saveUncommited", null);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body text-center\">\r\n    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"newPost()\">New Post</button>\r\n  </div>\r\n</div>\r\n<br />\r\n<div *ngFor=\"let post of posts\">\r\n  <h5 class=\"text-left\">\r\n    <a routerLink=\"edit/{{post.postid}}\" class=\"badge badge-info text-left\" style=\"overflow-wrap: break-word; max-width: 100%; white-space: normal; width: 100%;\">\r\n      <span class=\"badge badge-light\">{{post.created | date: 'short'}}</span>\r\n      <span style=\"overflow-wrap: break-word;\">{{post.title}}</span>\r\n    </a>\r\n  </h5>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        //this.router.events.subscribe(x => { this.initilizeState(); })
        this.initilizeState();
    };
    ListComponent.prototype.initilizeState = function () {
        this.posts = this.blogService.getPosts();
    };
    ListComponent.prototype.newPost = function () {
        var post = this.blogService.newPost();
        this.router.navigate(['edit/' + String(post.postid)]);
    };
    ListComponent.prototype.redirect = function (id) {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h2>Preview</h2>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h2 >{{currentPost.title}}</h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-text\" [innerHTML]=\"bodyHTML\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n      <a routerLink=\"/edit/{{currentPost.postid}}\" class=\"btn btn-sm btn-warning\">Back to Edit</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_commonmark__ = __webpack_require__("../../../../commonmark/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_commonmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_commonmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    PreviewComponent.prototype.initializeState = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.currentPost = this.blogService.getPost(id);
        var reader = new __WEBPACK_IMPORTED_MODULE_1_commonmark__["Parser"]();
        var writer = new __WEBPACK_IMPORTED_MODULE_1_commonmark__["HtmlRenderer"]();
        var parsed = reader.parse(this.currentPost.body);
        // transform parsed if you like...
        this.bodyHTML = writer.render(parsed); // result is a String
    };
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.initializeState(); // reset and set based on new parameter this time
        });
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map