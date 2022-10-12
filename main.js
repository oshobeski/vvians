(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\epprrar\Dev\vvians\src\main.ts */"zUnb");


/***/ }),

/***/ "86DS":
/*!*****************************************!*\
  !*** ./src/app/outhstrava.component.ts ***!
  \*****************************************/
/*! exports provided: OuthstravaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuthstravaComponent", function() { return OuthstravaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _strava_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strava.service */ "Z/6Y");



class OuthstravaComponent {
    constructor(_activatedRoutes, _stravaServices, router) {
        this._activatedRoutes = _activatedRoutes;
        this._stravaServices = _stravaServices;
        this.router = router;
        this.emailId = '';
        this.name = '';
        this.runnerId = '';
    }
    ngOnInit() {
        this._activatedRoutes.url.subscribe((url) => {
            var _a;
            this.emailId = (_a = url[1]) === null || _a === void 0 ? void 0 : _a.path;
        });
        this._activatedRoutes.queryParams.subscribe((params) => {
            this._stravaServices.client_code = params['code'];
        });
        if (this.emailId && this._stravaServices.client_code) {
            this.getToken();
        }
    }
    getToken() {
        this._stravaServices.getAccessToken().subscribe((data) => {
            this.name = data.athlete.firstname + data.athlete.lastname;
            this._stravaServices.clientRefreshToken = data.refresh_token;
            this.runnerId = data.athlete.id;
            this._stravaServices.insertAccessToken(this.runnerId, this.emailId, this.name, data.refresh_token)
                .subscribe((resp) => {
                this.router.navigate(['/runnerDetails']);
                // todo handle save scenario
            });
        });
    }
}
OuthstravaComponent.ɵfac = function OuthstravaComponent_Factory(t) { return new (t || OuthstravaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_strava_service__WEBPACK_IMPORTED_MODULE_2__["StravaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OuthstravaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OuthstravaComponent, selectors: [["app-outhstrava"]], decls: 0, vars: 0, template: function OuthstravaComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R959":
/*!********************************************!*\
  !*** ./src/app/runner.detail.component.ts ***!
  \********************************************/
/*! exports provided: RunnerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerDetails", function() { return RunnerDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _strava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strava.service */ "Z/6Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RunnerDetails_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
} }
function RunnerDetails_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const rowIndex_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowIndex_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, row_r3.distance / 1000, ""), " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, row_r3.start_date, "mediumDate"));
} }
class RunnerDetails {
    constructor(stravaService) {
        this.stravaService = stravaService;
        this.header = ['Sno', 'Activity Name', 'Activity Type', 'Distance', 'Activity Date'];
    }
    ngOnInit() {
        this.getAthlete();
    }
    getActivities() {
        const before = Math.floor((new Date('2021/07/30').getTime() - new Date('2021/07/30').getMilliseconds()) / 1000);
        const after = Math.floor((new Date('2021/07/01').getTime() - new Date('2021/07/01').getMilliseconds()) / 1000);
        this.stravaService.before = before;
        this.stravaService.after = after;
        this.stravaService.getRefreshToken('activities', null).subscribe(obj => {
            this.activities = obj;
        });
    }
    getAthlete() {
        this.stravaService.getRefreshToken('athlete').subscribe(obj => {
            this.athlete = obj;
            this.getStats(obj.id);
        }, error => this.errorMessage = error);
    }
    getStats(id) {
        this.stravaService.getRefreshToken('stats', id).subscribe(obj => {
            this.stats = this.stats = obj;
            this.getActivities();
        });
    }
    getFriends(id) {
        return new Promise((resolve, reject) => {
            this.stravaService.getFriends(id)
                .subscribe(friends => this.friends = friends, error => this.errorMessage = error);
        });
    }
}
RunnerDetails.ɵfac = function RunnerDetails_Factory(t) { return new (t || RunnerDetails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_strava_service__WEBPACK_IMPORTED_MODULE_1__["StravaService"])); };
RunnerDetails.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RunnerDetails, selectors: [["app-root"]], decls: 34, vars: 8, consts: [[1, "container"], [3, "src"], [1, "my-table"], [1, "my-table", "headers"], [4, "ngFor", "ngForOf"], [1, "my-table", "body"], ["my-active", "", 4, "ngFor", "ngForOf"], ["my-active", ""]], template: function RunnerDetails_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Strava Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Ride Distance So far: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Run Distance So far: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Swim Distance So far: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Daily Activities of July Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RunnerDetails_th_31_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RunnerDetails_tr_33_Template, 13, 11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.athlete == null ? null : ctx.athlete.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.athlete == null ? null : ctx.athlete.firstname) + " " + (ctx.athlete == null ? null : ctx.athlete.lastname), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.athlete == null ? null : ctx.athlete.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.stats == null ? null : ctx.stats.all_ride_totals.distance) / 1000, " km");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.stats == null ? null : ctx.stats.all_run_totals.distance) / 1000, " km");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.stats == null ? null : ctx.stats.all_swim_totals.distance) / 1000, " km ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["table.my-table[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-collapse: collapse;\r\n    width: 60%;\r\n    text-align: center;\r\n  }\r\n  \r\n  thead.my-table.headers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: white solid 3px;\r\n    background-color: rgb(0, 100, 139);\r\n    color: white;\r\n    height: 25px;\r\n  }\r\n  \r\n  tbody.my-table.body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border: black solid 1px;\r\n    border-left: none;\r\n    height: 25px;\r\n  }\r\n  \r\n  tbody.my-table.body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.last[_ngcontent-%COMP%] {\r\n    border-right: none;\r\n  }\r\n  \r\n  tbody.my-table.body[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%] {\r\n    background-color: gainsboro;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bm5lci5kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGVBQWU7RUFDakIiLCJmaWxlIjoicnVubmVyLmRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUubXktdGFibGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRoZWFkLm15LXRhYmxlLmhlYWRlcnMgdHIgdGgge1xyXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAxMzkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICB0Ym9keS5teS10YWJsZS5ib2R5IHRyIHRkIHtcclxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRib2R5Lm15LXRhYmxlLmJvZHkgdHIgdGQubGFzdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRib2R5Lm15LXRhYmxlLmJvZHkgdHIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _strava_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strava.service */ "Z/6Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AppComponent {
    constructor(stravaService, router) {
        this.stravaService = stravaService;
        this.router = router;
    }
    ngOnInit() {
    }
    checkRunnerDetail(email) {
        this.stravaService.checkEmailFromDB(email).subscribe((data) => {
            if (data.length === 0) {
                window.location.href = `https://www.strava.com/oauth/authorize?client_id=24114&redirect_uri=http://localhost:4200/strava/${this.emailId}&response_type=code&scope=activity:read_all`;
            }
            else {
                this.stravaService.clientRefreshToken = data[0].token;
                this.router.navigate(['/runnerDetails']);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_strava_service__WEBPACK_IMPORTED_MODULE_1__["StravaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [["type", "text", "value", "Sydney", 3, "ngModel", "ngModelChange"], ["formtarget", "_blank", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome VVians...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter Runner Email - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) { return ctx.emailId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0\u00A0\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.checkRunnerDetail(ctx.emailId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Runner's Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailId);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "Z/6Y":
/*!***********************************!*\
  !*** ./src/app/strava.service.ts ***!
  \***********************************/
/*! exports provided: StravaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StravaService", function() { return StravaService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class StravaService {
    constructor(http) {
        this.http = http;
        this.apiURL = '/api/v3';
        this.serverUrl = 'http://localhost:8080';
        this.clientRefreshToken = '';
        this.client_id = '24114';
        this.client_secret = '704a8de089da0a0b1410b78c85185777e2a1aefd';
        this.client_code = '';
        this.restType = '';
        this._athlete = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this._athleteinfo$ = this._athlete.asObservable();
    }
    checkEmailFromDB(id) {
        // sample DB mock data
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([{ "email": "jaganviky@gmail.com", "token": "dfb8b058532d8463ea4352f478c6d60057a48bb4", "name": "jagan_raj", "runTotal": "0", "cycleTotal": "0", "swimTotal": "0", "othersTotal": "0", "runnerId": "22865789" }]);
        // return this.http.get(`${this.serverUrl}/getByEmail/${id}`)
        //   .pipe(map(this.extractData), catchError(this.handleError));
    }
    getAccessToken() {
        let url = `${this.apiURL}/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${this.client_code}&grant_type=authorization_code`;
        return this.http.post(url, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getRefreshToken(type, id) {
        this.restType = type ? type : '';
        this.runnerId = id ? id : '';
        let url = `${this.apiURL}/oauth/token?client_id=${this.client_id}&client_secret=${this.client_secret}&refresh_token=${this.clientRefreshToken}&grant_type=refresh_token`;
        return this.http.post(url, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((resp) => {
            this._athlete.next(resp.athlete);
            if (this.restType === 'activities') {
                return this.getActivities(resp.access_token);
            }
            else if (this.restType === 'athlete') {
                return this.getAthlete(resp.access_token);
            }
            else if (this.restType === 'stats') {
                return this.getStats(this.runnerId, resp.access_token);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resp);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    insertAccessToken(rid, email, name, token) {
        let obj = {};
        obj['email'] = email;
        obj['id'] = rid;
        obj['name'] = name;
        obj['token'] = token;
        return this.http.post(`${this.serverUrl}/insertAccessToken`, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    createAuthorizationHeader(token) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': `Bearer ${token}`, 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json' });
    }
    getAthlete(token) {
        let url = `${this.apiURL}/athlete/`;
        return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getActivities(accesToken, id) {
        let url = `${this.apiURL}/activities?access_token=${accesToken}&before=${this.before}&after=${this.after}`;
        return this.http.get(url, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData, this.restType), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getStats(id, token) {
        let url = `${this.apiURL}/athletes/${id}/stats`;
        return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getFriends(id, token) {
        let url = `${this.apiURL}/athletes/${id}/friends`;
        return this.http.get(url, { 'headers': this.createAuthorizationHeader(token) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    extractData(res) {
        if (this.restType === 'activities') {
            this.getActivities(res.access_token);
        }
        else {
            return res || {};
        }
    }
    handleError(error) {
        let errMsg;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        else {
            errMsg = error;
        }
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMsg);
    }
}
StravaService.ɵfac = function StravaService_Factory(t) { return new (t || StravaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StravaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StravaService, factory: StravaService.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _strava_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strava.service */ "Z/6Y");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _runner_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runner.detail.component */ "R959");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _outhstrava_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outhstrava.component */ "86DS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_strava_service__WEBPACK_IMPORTED_MODULE_3__["StravaService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _runner_detail_component__WEBPACK_IMPORTED_MODULE_5__["RunnerDetails"],
        _outhstrava_component__WEBPACK_IMPORTED_MODULE_7__["OuthstravaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _outhstrava_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outhstrava.component */ "86DS");
/* harmony import */ var _runner_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runner.detail.component */ "R959");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
    { path: 'strava', component: _outhstrava_component__WEBPACK_IMPORTED_MODULE_2__["OuthstravaComponent"] },
    { path: 'runnerDetails', component: _runner_detail_component__WEBPACK_IMPORTED_MODULE_3__["RunnerDetails"] },
    { path: '**', component: _outhstrava_component__WEBPACK_IMPORTED_MODULE_2__["OuthstravaComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map