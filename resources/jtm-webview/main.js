"use strict";
(self["webpackChunkjtw_webview"] = self["webpackChunkjtw_webview"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/hot-toast */ 8771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ 2981);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ 8911);







const _c0 = ["form"];
function AppComponent_form_5_li_12_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 23);
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r10.message.languages[i_r9].Culture);
} }
function AppComponent_form_5_li_12_tag_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag-input", 24);
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r11.message.languages[i_r9].Culture)("editable", true);
} }
function AppComponent_form_5_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_form_5_li_12_input_4_Template, 1, 1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_form_5_li_12_tag_input_5_Template, 1, 2, "tag-input", 22);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.translationForms.controls.isArray.value === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.translationForms.controls.isArray.value === true);
} }
function AppComponent_form_5_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AppComponent_form_5_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Command+S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_form_5_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (Ctrl+S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Translation key : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "isArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_form_5_li_12_Template, 6, 8, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_form_5_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_form_5_ng_container_17_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_form_5_ng_template_18_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_form_5_ng_template_20_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.translationForms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.value.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.navigator.platform.match("Mac"))("ngIfThen", _r4)("ngIfElse", _r6);
} }
class AppComponent {
    constructor(notifierService, formBuilder, changeDetectorRef) {
        this.notifierService = notifierService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
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
            isArray: false,
            value: this.formBuilder.array([]),
        });
        this.value = this.translationForms.controls.value;
        this.translationForms.controls.isArray.valueChanges.subscribe(() => {
            this.value.controls.forEach((element) => {
                if (this.translationForms.controls.isArray.value === true) {
                    element.controls.translationValue.setValue(element.controls.translationValue.value.split(','));
                }
                else {
                    element.controls.translationValue.setValue(element.controls.translationValue.value.toString());
                }
            });
            console.log('**************');
            console.log(this.value);
            this.changeDetectorRef.detectChanges();
        });
        message.value.forEach((element) => {
            if (this.translationForms.controls.isArray.value === false) {
                this.translationForms.controls.isArray.setValue(this.isArrayOfStrings(element.translationValue));
            }
            this.value.push(this.translationItem(element.culture, element.translationValue));
        });
        setTimeout(() => {
            this.setFocus(this.message.languages[0].Culture);
        }, 200);
    }
    translationItem(culture, translationValue) {
        return this.formBuilder.group({
            culture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(culture),
            translationValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(translationValue),
        });
    }
    isArrayOfStrings(value) {
        return Array.isArray(value) && value.every(item => typeof item === "string");
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
    onKeyDown($event) {
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
        this.notifierService.success('Translation Saved');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_2__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("message", function AppComponent_message_HostBindingHandler($event) { return ctx.onMessage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 1, consts: [[1, "section", 3, "keydown"], [1, "center"], [1, "svg", 2, "width", "10%"], [1, "text-style"], ["class", "form-style", 3, "formGroup", 4, "ngIf"], [1, "form-style", 3, "formGroup"], ["form", ""], [1, "key-text"], [2, "font-weight", "bold"], [1, "p-field-checkbox", "ms-5px", "d-inline"], ["name", "group1", "binary", "true", "formControlName", "isArray", "inputId", "isArray"], ["for", "isArray", 1, "ms-5px"], ["formArrayName", "value", 3, "dir", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["type", "button", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["Mac", ""], ["Other", ""], ["formArrayName", "value", 3, "dir"], [3, "formGroupName"], [3, "for"], ["type", "text", "formControlName", "translationValue", 3, "name", 4, "ngIf"], ["placeholder", "+", "modelAsStrings", "true", "formControlName", "translationValue", 3, "name", "editable", 4, "ngIf"], ["type", "text", "formControlName", "translationValue", 3, "name"], ["placeholder", "+", "modelAsStrings", "true", "formControlName", "translationValue", 3, "name", "editable"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AppComponent_Template_section_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Json Translation Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_form_5_Template, 22, 6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, ngx_chips__WEBPACK_IMPORTED_MODULE_5__.TagInputComponent], styles: [".section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.svg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--vscode-activityBar-foreground);\n  \n  mask: var(--logo) no-repeat center/contain;\n  -webkit-mask: var(--logo) no-repeat center/contain;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.key-text[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.text-style[_ngcontent-%COMP%] {\n  color: var(--vscode-activityBar-foreground);\n  font-size: x-large;\n}\n\n.form-style[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.form-style[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0px 0px 20px 0px;\n  color: var(--vscode-activityBar-foreground);\n  font-size: x-large;\n}\n\n.form-style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 9px;\n  border: 1px solid var(--vscode-activityBar-foreground);\n  margin-bottom: 30px;\n  border-radius: 0px;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: none;\n  margin-bottom: 0px;\n  text-align: center;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-top: -19px;\n  background-color: var(--vscode-activityBar-background);\n  height: 19px;\n  padding: 2px 5px 2px 5px;\n  color: var(--vscode-activityBar-foreground);\n  font-size: 14px;\n  overflow: hidden;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label.rtl[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=datetime][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  width: 100%;\n  display: block;\n  color: var(--vscode-activityBar-foreground);\n  background-color: transparent;\n  outline: none;\n  border: none;\n  height: 25px;\n  line-height: 25px;\n  font-size: 16px;\n  padding: 0;\n}\n\n.form-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n  padding: 3px;\n  margin: 0 -9px -9px -9px;\n  text-align: center;\n  color: var(--vscode-activityBar-foreground);\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 11px;\n}\n\n.form-style[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .form-style[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--vscode-button-background);\n  border: none;\n  padding: 10px 20px 10px 20px;\n  border-bottom: 3px solid var(--vscode-button-background);\n  border-radius: 0px;\n  cursor: pointer;\n  color: var(--vscode-activityBar-foreground);\n}\n\n.form-style[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, .form-style[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover {\n  background: var(--vscode-button-background);\n  border-bottom: 1px solid var(--vscode-button-background);\n  border-radius: 0px;\n  color: var(--vscode-activityBar-foreground);\n}\n\n.ms-5px[_ngcontent-%COMP%] {\n  margin-inline-start: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0VBRUcsOENBQUE7RUFDSCwwQ0FBQTtFQUNBLGtEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQVFGOztBQVBFO0VBQ0UsWUFBQTtBQVNKOztBQU5BOzs7Ozs7Ozs7OztFQVdFLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFTRjs7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7QUFVRjs7QUFSQTs7O0VBR0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBV0Y7O0FBVEE7O0VBRUUsMkNBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFZRjs7QUFUQTtFQUNFLHdCQUFBO0FBWUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5zdmcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXHJcbiAgICAtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kXHJcbiAgKTsgLyogZGVmaW5lcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgaW1hZ2UgKi9cclxuICBtYXNrOiB2YXIoLS1sb2dvKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcclxuICAtd2Via2l0LW1hc2s6IHZhcigtLWxvZ28pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmtleS10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50ZXh0LXN0eWxlIHtcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG4uZm9ybS1zdHlsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uZm9ybS1zdHlsZSBoMSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItZm9yZWdyb3VuZCk7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcbi5mb3JtLXN0eWxlIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5mb3JtLXN0eWxlIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5mb3JtLXN0eWxlIGxpOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLXN0eWxlIGxpIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAtMTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItYmFja2dyb3VuZCk7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICYucnRsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4uZm9ybS1zdHlsZSBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuLmZvcm0tc3R5bGUgdGV4dGFyZWEsXHJcbi5mb3JtLXN0eWxlIHNlbGVjdCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItZm9yZWdyb3VuZCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zdHlsZSBsaSBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAwIC05cHggLTlweCAtOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uZm9ybS1zdHlsZSB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbi5mb3JtLXN0eWxlIGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbi5mb3JtLXN0eWxlIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYWN0aXZpdHlCYXItZm9yZWdyb3VuZCk7XHJcbn1cclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuLmZvcm0tc3R5bGUgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6IHZhcigtLXZzY29kZS1hY3Rpdml0eUJhci1mb3JlZ3JvdW5kKTtcclxufVxyXG5cclxuLm1zLTVweCB7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ 2981);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/hot-toast */ 8771);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ 8911);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.CheckboxModule,
            ngx_chips__WEBPACK_IMPORTED_MODULE_6__.TagInputModule,
            _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__.HotToastModule.forRoot({
                position: 'bottom-center',
                dismissible: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.CheckboxModule,
        ngx_chips__WEBPACK_IMPORTED_MODULE_6__.TagInputModule, _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__.HotToastModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
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
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map