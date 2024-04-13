import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CheckboxModule,
    TagInputModule,
  ],
  providers: [
    provideHotToastConfig({
      position: 'bottom-center',
      dismissible: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
