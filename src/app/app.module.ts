import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsyncClickDirective } from 'ngx-async-click';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AsyncClickDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
