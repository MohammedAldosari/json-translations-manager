import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
  key: string = '';
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
    private notifierService: NotifierService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.vscode.postMessage('started');
  }

  generateForm(languagesList: Array<Languages>, translationKey: string) {
    this.translationForms = this.formBuilder.group({
      translationKey: translationKey,
      value: this.formBuilder.array([]),
    });
    this.value = this.translationForms.controls.value as FormArray;
    languagesList.forEach((element) => {
      this.value.push(this.translationItem(element.Culture));
    });
    setTimeout(() => {
      this.setFocus(this.message.languages[0].Culture);
    }, 200);
  }
  translationItem(culture: string): FormGroup {
    return this.formBuilder.group({
      culture: culture,
      translationValue: '',
    });
  }

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    if (event && event.data) {
      this.message = event.data as WebviewMessage;
      this.key = this.message.TranslationKey;
      this.generateForm(this.message.languages, this.message.TranslationKey);
      console.log(this.message);
    }
  }

  setFocus(name) {
    const ele = this.form.nativeElement[name];
    if (ele) {
      ele.focus();
    }
  }

  onKeyUp($event): void {
    // Detect platform
    if (navigator.platform.match('Mac')) {
      this.handleMacKeyEvents($event);
    } else {
      this.handleWindowsKeyEvents($event);
    }
  }

  handleMacKeyEvents($event) {
    // MetaKey documentation
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey
    let charCode = String.fromCharCode($event.which).toLowerCase();
    if ($event.metaKey && charCode === 's') {
      // Action on Cmd + S
      this.save();
      $event.preventDefault();
    }
  }

  handleWindowsKeyEvents($event) {
    let charCode = String.fromCharCode($event.which).toLowerCase();
    if ($event.ctrlKey && charCode === 's') {
      // Action on Ctrl + S
      this.save();
      $event.preventDefault();
    }
  }

  save() {
    console.log(this.translationForms.value);

    this.vscode.postMessage(this.translationForms.value);
    this.notifierService.notify('success', 'You are awesome! I mean it!');
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
}
