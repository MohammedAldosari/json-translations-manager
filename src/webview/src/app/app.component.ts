import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('form', { static: false }) form: ElementRef;

  title = 'jtw-webview';
  message: WebviewMessage;
  navigator = navigator;
  key = '';
  translationForms: FormGroup;
  value: FormArray;

  vsCodeFunction = Function(`
  if (typeof acquireVsCodeApi == 'function') {
    return acquireVsCodeApi();
  } else {
    return undefined;
  }
  `);

  vscode = this.vsCodeFunction();

  constructor(
    private notifierService: HotToastService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.vscode.postMessage('started');
  }

  private generateForm(message: WebviewMessage): void {
    this.translationForms = this.formBuilder.group({
      translationKey: message.TranslationKey,
      isArray: false,
      value: this.formBuilder.array([]),
    });
    this.value = this.translationForms.controls.value as FormArray;
    this.translationForms.controls.isArray.valueChanges.subscribe(() => {
      this.value.controls.forEach((element: FormGroup) => {
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
      this.value.push(
        this.translationItem(element.culture, element.translationValue)
      );
    });
    setTimeout(() => {
      this.setFocus(this.message.languages[0].Culture);
    }, 200);
  }
  translationItem(culture: string, translationValue: string | Array<string>): FormGroup {
    return this.formBuilder.group({
      culture: new FormControl(culture),
      translationValue: new FormControl(translationValue),
    });
  }
  isArrayOfStrings(value: any): boolean {
    return Array.isArray(value) && value.every(item => typeof item === "string");
  }

  @HostListener('window:message', ['$event'])
  private onMessage(event: any): void {
    if (event && event.data) {
      if ((event.data as WebviewMessage).TranslationKey) {
        this.message = event.data as WebviewMessage;
        this.key = this.message.TranslationKey;
        this.generateForm(this.message);
        console.log(this.message);
      } else if (event.data === 'Saved') {
        this.dataSaved();
      }
    }
  }

  setFocus(name: string): void {
    const ele = this.form.nativeElement[name];
    if (ele) {
      ele.focus();
    }
  }

  onKeyDown($event): void {
    // Detect platform
    if (navigator.platform.match('Mac')) {
      this.handleMacKeyEvents($event);
    } else {
      this.handleWindowsKeyEvents($event);
    }
  }

  handleMacKeyEvents($event: any): void {
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

  handleWindowsKeyEvents($event): void {
    const charCode = String.fromCharCode($event.which).toLowerCase();
    if ($event.ctrlKey && charCode === 's') {
      // Action on Ctrl + S
      this.save();
      $event.preventDefault();
      $event.stopImmediatePropagation();
    }
  }

  save(): void {
    console.log(this.translationForms.value);

    this.vscode.postMessage(this.translationForms.value);
  }

  dataSaved(): void {
    this.notifierService.success('Translation Saved');
  }
}

interface Languages {
  Culture: string;
  English: string;
  Native: string;
  Direction: string;
}

interface WebviewMessage {
  languages: Array<Languages>;
  TranslationKey: string;
  value: [
    {
      culture: string;
      translationValue: string;
    }
  ];
}
