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
    private notifierService: NotifierService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.vscode.postMessage('started');
  }

  private generateForm(message: WebviewMessage): void {
    this.translationForms = this.formBuilder.group({
      translationKey: message.TranslationKey,
      value: this.formBuilder.array([]),
    });
    this.value = this.translationForms.controls.value as FormArray;
    message.value.forEach((element) => {
      this.value.push(
        this.translationItem(element.culture, element.translationValue)
      );
    });
    setTimeout(() => {
      this.setFocus(this.message.languages[0].Culture);
    }, 200);
  }
  translationItem(culture: string, translationValue: string = ''): FormGroup {
    return this.formBuilder.group({
      culture,
      translationValue,
    });
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

  onKeyUp($event): void {
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
    this.notifierService.notify('success', 'Translation Saved');
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
