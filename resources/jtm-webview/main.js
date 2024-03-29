(self["webpackChunkjtw_webview"] = self["webpackChunkjtw_webview"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ 8609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




const _c0 = ["form"];
function AppComponent_form_5_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx_r2.message.languages[i_r9].Direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.message.languages[i_r9].Direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r2.message.languages[i_r9].Culture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.message.languages[i_r9].Native, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.message.languages[i_r9].Culture)("name", ctx_r2.message.languages[i_r9].Culture);
} }
function AppComponent_form_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AppComponent_form_5_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Command+S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_form_5_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Ctrl+S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Translation key : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_form_5_li_8_Template, 5, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_form_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_form_5_ng_container_13_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_form_5_ng_template_14_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_form_5_ng_template_16_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.translationForms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.value.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.navigator.platform.match("Mac"))("ngIfThen", _r4)("ngIfElse", _r6);
} }
class AppComponent {
    constructor(notifierService, formBuilder) {
        this.notifierService = notifierService;
        this.formBuilder = formBuilder;
        this.title = 'jtw-webview';
        this.navigator = navigator;
        this.key = '';
        this.vsCodeFunction = Function(`
  if (typeof acquireVsCodeApi == 'function') {
    return acquireVsCodeApi();
  } else {
    return undefined;
  }
  `);
        this.vscode = this.vsCodeFunction();
    }
    ngOnInit() {
        this.vscode.postMessage('started');
    }
    generateForm(message) {
        this.translationForms = this.formBuilder.group({
            translationKey: message.TranslationKey,
            value: this.formBuilder.array([]),
        });
        this.value = this.translationForms.controls.value;
        message.value.forEach((element) => {
            this.value.push(this.translationItem(element.culture, element.translationValue));
        });
        setTimeout(() => {
            this.setFocus(this.message.languages[0].Culture);
        }, 200);
    }
    translationItem(culture, translationValue = '') {
        return this.formBuilder.group({
            culture,
            translationValue,
        });
    }
    onMessage(event) {
        if (event && event.data) {
            if (event.data.TranslationKey) {
                this.message = event.data;
                this.key = this.message.TranslationKey;
                this.generateForm(this.message);
                console.log(this.message);
            }
            else if (event.data === 'Saved') {
                this.dataSaved();
            }
        }
    }
    setFocus(name) {
        const ele = this.form.nativeElement[name];
        if (ele) {
            ele.focus();
        }
    }
    onKeyUp($event) {
        // Detect platform
        if (navigator.platform.match('Mac')) {
            this.handleMacKeyEvents($event);
        }
        else {
            this.handleWindowsKeyEvents($event);
        }
    }
    handleMacKeyEvents($event) {
        // MetaKey documentation
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey
        const charCode = String.fromCharCode($event.which).toLowerCase();
        if ($event.metaKey && charCode === 's') {
            // Action on Cmd + S
            this.save();
            $event.preventDefault();
            $event.stopImmediatePropagation();
        }
    }
    handleWindowsKeyEvents($event) {
        const charCode = String.fromCharCode($event.which).toLowerCase();
        if ($event.ctrlKey && charCode === 's') {
            // Action on Ctrl + S
            this.save();
            $event.preventDefault();
            $event.stopImmediatePropagation();
        }
    }
    save() {
        console.log(this.translationForms.value);
        this.vscode.postMessage(this.translationForms.value);
    }
    dataSaved() {
        this.notifierService.notify('success', 'Translation Saved');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_1__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("message", function AppComponent_message_HostBindingHandler($event) { return ctx.onMessage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 1, consts: [[1, "section", 3, "keyup"], [1, "center"], [1, "svg", 2, "width", "10%"], [1, "text-style"], ["class", "form-style", 3, "formGroup", 4, "ngIf"], [1, "form-style", 3, "formGroup"], ["form", ""], [1, "key-text"], [2, "font-weight", "bold"], ["formArrayName", "value", 3, "dir", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["type", "button", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["Mac", ""], ["Other", ""], ["formArrayName", "value", 3, "dir"], [3, "formGroupName"], [3, "for"], ["type", "text", "formControlName", "translationValue", 3, "name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_Template_section_keyup_0_listener($event) { return ctx.onKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Json Tralation Manger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_form_5_Template, 18, 6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "notifier-container");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, angular_notifier__WEBPACK_IMPORTED_MODULE_1__.NotifierContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".section[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.svg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--vscode-activityBar-foreground);\n  \n  mask: var(--logo) no-repeat center/contain;\n  -webkit-mask: var(--logo) no-repeat center/contain;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.key-text[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.text-style[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: var(--vscode-activityBar-foreground);\n  font-size: x-large;\n}\n\n.form-style[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-style[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0px 0px 20px 0px;\n  color: var(--vscode-activityBar-foreground);\n  font-size: x-large;\n}\n\n.form-style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9px;\n  border: 1px solid var(--vscode-activityBar-foreground);\n  margin-bottom: 30px;\n  border-radius: 0px;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: none;\n  margin-bottom: 0px;\n  text-align: center;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-top: -19px;\n  background-color: var(--vscode-activityBar-background);\n  height: 14px;\n  padding: 2px 5px 2px 5px;\n  color: var(--vscode-activityBar-foreground);\n  font-size: 14px;\n  overflow: hidden;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label.rtl[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=datetime][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  display: block;\n  color: var(--vscode-activityBar-foreground);\n  background-color: transparent;\n  outline: none;\n  border: none;\n  height: 25px;\n  line-height: 25px;\n  font-size: 16px;\n  padding: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n  padding: 3px;\n  margin: 0 -9px -9px -9px;\n  text-align: center;\n  color: var(--vscode-activityBar-foreground);\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 11px;\n}\n\n.form-style[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--vscode-button-background);\n  border: none;\n  padding: 10px 20px 10px 20px;\n  border-bottom: 3px solid var(--vscode-button-background);\n  border-radius: 0px;\n  cursor: pointer;\n  color: var(--vscode-activityBar-foreground);\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, .form-style[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover {\n  background: var(--vscode-button-background);\n  border-bottom: 1px solid var(--vscode-button-background);\n  border-radius: 0px;\n  color: var(--vscode-activityBar-foreground);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxREFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0RBQUE7RUFBd0QsOENBQUE7RUFDeEQsMENBQUE7RUFDQSxrREFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxxREFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxxREFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBVUY7O0FBVEU7RUFDRSxZQUFBO0FBV0o7O0FBUkE7Ozs7Ozs7Ozs7O0VBV0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO0FBV0Y7O0FBUkE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBVEE7RUFDRSxZQUFBO0FBWUY7O0FBVkE7OztFQUdFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQWFGOztBQVhBOztFQUVFLDJDQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBY0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuLnN2ZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kKTsgLyogZGVmaW5lcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaW1hZ2UgKi9cclxuICBtYXNrOiB2YXIoLS1sb2dvKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAtd2Via2l0LW1hc2s6IHZhcigtLWxvZ28pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmtleS10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50ZXh0LXN0eWxlIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItZm9yZWdyb3VuZCk7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbi5mb3JtLXN0eWxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmZvcm0tc3R5bGUgaDEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uZm9ybS1zdHlsZSB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZm9ybS1zdHlsZSBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kKTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZm9ybS1zdHlsZSBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1zdHlsZSBsaSBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWJhY2tncm91bmQpO1xyXG4gIGhlaWdodDogMTRweDtcclxuICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XHJcbiAgY29sb3I6IHZhcigtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAmLnJ0bCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uZm9ybS1zdHlsZSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxyXG4uZm9ybS1zdHlsZSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG4uZm9ybS1zdHlsZSBpbnB1dFt0eXBlPVwidXJsXCJdLFxyXG4uZm9ybS1zdHlsZSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbi5mb3JtLXN0eWxlIHRleHRhcmVhLFxyXG4uZm9ybS1zdHlsZSBzZWxlY3Qge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1zdHlsZSBsaSBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAwIC05cHggLTlweCAtOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uZm9ybS1zdHlsZSB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbi5mb3JtLXN0eWxlIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItZm9yZWdyb3VuZCk7XHJcbn1cclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6IHZhcigtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ 8609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, angular_notifier__WEBPACK_IMPORTED_MODULE_4__.NotifierModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map