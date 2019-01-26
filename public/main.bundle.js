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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routes_1 = __webpack_require__("../../../../../src/app/app.routes.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var observable_test_component_1 = __webpack_require__("../../../../../src/app/components/observable-test/observable-test.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
var modify_problem_component_1 = __webpack_require__("../../../../../src/app/components/modify-problem/modify-problem.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                observable_test_component_1.ObservableTestComponent,
                navbar_component_1.NavbarComponent,
                editor_component_1.EditorComponent,
                modify_problem_component_1.ModifyProblemComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var observable_test_component_1 = __webpack_require__("../../../../../src/app/components/observable-test/observable-test.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent
    },
    {
        path: 'observable',
        component: observable_test_component_1.ObservableTestComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    #editor {\n        height: 600px;\n    }\n    .lang-select {\n        width: 100px;\n        margin: 10px;\n        display: inline-block\n    }\n    header .btn {\n        margin: 0 5px;\n    }\n    footer .btn {\n        margin: 0 5px;\n    }\n    .editor-footer, .editor-header {\n        margin: 10px 0;\n    }\n    .cursor {\n        background: rgba(0, 250, 0, 0.5);\n        z-index: 40;\n        width: 2px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <header class=\"editor-header\">\n        <select class=\"form-control lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n            <option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</option>\n        </select>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Reset</button>\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        You will lose current code in the editor, are you sure?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <section>\n        <div id=\"editor\"></div>\n    </section>\n    <footer class=\"editor-footer\">\n        <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"submit()\">Submit Solution</button>\n    </footer>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.defaultContent = {
            Java: "public class Example {\n  public static void main(String[] args) {\n    //type your Java code here\n  }\n}",
            Python: "class Solution:\n  def example():\n    # write your python code here.\n"
        };
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            _this.collaboration.restoreBuffer();
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var user_code = this.editor.getValue();
        console.log(user_code);
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.session.setMode('ace/mode/java');
        this.resetEditor();
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor chagees: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "../../../../../src/app/components/modify-problem/modify-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modify-problem/modify-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea rows=\"20\" type=\"text\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" placeholder=\"Input description\" required [(ngModel)]=\"problem.desc\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"problem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">{{difficulty}}</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"modifyProblem()\">Modify Problem</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modify-problem/modify-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var problem_model_1 = __webpack_require__("../../../../../src/app/models/problem.model.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var ModifyProblemComponent = /** @class */ (function () {
    function ModifyProblemComponent(dataService) {
        this.dataService = dataService;
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    ModifyProblemComponent.prototype.ngOnInit = function () {
    };
    ModifyProblemComponent.prototype.modifyProblem = function () {
        this.dataService.modifyProblem(this.problem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", problem_model_1.Problem)
    ], ModifyProblemComponent.prototype, "problem", void 0);
    ModifyProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-modify-problem',
            template: __webpack_require__("../../../../../src/app/components/modify-problem/modify-problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modify-problem/modify-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ModifyProblemComponent);
    return ModifyProblemComponent;
}());
exports.ModifyProblemComponent = ModifyProblemComponent;


/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/problems']\">OJ-CLIENT</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/problems']\">Action</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/problems']\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/problems']\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" placeholder=\"Input problem name\" required [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" placeholder=\"Input description\" required [(ngModel)]=\"newProblem.desc\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">{{difficulty}}</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <button type=\"submit\" class=\"btn btn-primary float-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "../../../../../src/app/components/observable-test/observable-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/observable-test/observable-test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  observable-test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/observable-test/observable-test.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var ObservableTestComponent = /** @class */ (function () {
    function ObservableTestComponent() {
    }
    ObservableTestComponent.prototype.ngOnInit = function () {
        this.subjectTest();
    };
    ObservableTestComponent.prototype.timeoutTest = function () {
        console.log('Exec Before SetTimeout!');
        setTimeout(function () {
            console.log('Exec Inner Timeout!');
        }, 3000);
        console.log('Exec After SetTimeout.');
    };
    ObservableTestComponent.prototype.promiseTest = function () {
        var promise = new Promise(function (resolve, reject) {
            console.log('Exec Before Resolve');
            setTimeout(function () {
                resolve('Exec In Promise and In Timeout!');
            }, 3000);
        });
        promise.then(function (v) { return console.log(v); }, function (err) { return console.error('error: ' + err); });
    };
    ObservableTestComponent.prototype.observableTest = function () {
        var stream$ = new Rx_1.Observable(function (observer) {
            console.log('obversable start exec!');
            observer.next(1);
            observer.next(2);
            setTimeout(function () { return observer.next(3); }, 3000);
        });
        var subscription1 = stream$.subscribe(function (v) { return console.log('s1: ' + v); }, function (e) { return console.error('s1 error: ' + e); }, function () { return console.log('s1 done!'); });
        setTimeout(function () {
            var subscription2 = stream$.subscribe(function (v) { return console.log('s2: ' + v); }, function (e) { return console.error('s2 error: ' + e); }, function () { return console.log('s2 done!'); });
        }, 1000);
    };
    ObservableTestComponent.prototype.subjectTest = function () {
        var subject = new Rx_1.Subject();
        subject.subscribe(function (v) { return console.log('O1: ' + v); });
        subject.subscribe(function (v) { return console.log('O2: ' + v); });
        subject.next(1);
        subject.next(2);
        subject.subscribe(function (v) { return console.log('O3: ' + v); });
        subject.next(3);
        setTimeout(function () { return subject.next(4); }, 3000);
    };
    ObservableTestComponent = __decorate([
        core_1.Component({
            selector: 'app-observable-test',
            template: __webpack_require__("../../../../../src/app/components/observable-test/observable-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/observable-test/observable-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ObservableTestComponent);
    return ObservableTestComponent;
}());
exports.ObservableTestComponent = ObservableTestComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-4\">\n      <div style=\"text-align: right\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/problems']\">Back</a>\n      </div>\n      <h2>{{problem.id}}.{{problem.name}}</h2>\n      <p *ngIf=\"!modifyMode\">{{problem.desc}}</p>\n      <app-modify-problem *ngIf=\"modifyMode\" [problem]=\"problem\"></app-modify-problem>\n      <p><button type=\"button\" class=\"btn btn-primary\" (click)=\"edit()\">{{modifyMode ? 'Cancel' : 'Edit'}}</button></p>\n    </div>\n    <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.modifyMode = false;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent.prototype.edit = function () {
        this.modifyMode = !this.modifyMode;
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n}\n.label.difficulty {\n    padding: 0.1em;\n    color: #fbfdfa;\n    font-size: 12px;\n    display: inline-block;\n    text-align: center;\n}\n.title {\n    font-size: 1.2em;\n}\n.diff-easy {\n    background-color: #42ebf4\n}\n.diff-medium {\n    background-color: #92cf5c\n}\n.diff-hard {\n    background-color: #dd8d1e;\n}\n.diff-super {\n    background-color: #8d16e2;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n</div>\n<div class=\"container\" style=\"margin-top: 30px\">\n  <a class=\"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\">\n    <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n      {{problem.difficulty}}\n    </span>\n    <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems(); //init problems list
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "../../../../../src/app/models/problem.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Problem = /** @class */ (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;


/***/ }),

/***/ "../../../../../src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        this.collaborationSocket.on("change", function (delta) {
            console.log('collabration: editor changes by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    DataService.prototype.handleError = function (err) {
        console.error('An error occured, ', err);
        return Promise.reject(err.body || err);
    };
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('/api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("/api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        return this.httpClient.post('/api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.modifyProblem = function (problem) {
        var _this = this;
        return this.httpClient.put("/api/v1/problems/" + problem.id, problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map