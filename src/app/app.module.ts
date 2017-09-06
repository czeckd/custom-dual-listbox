import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomListboxModule } from './custom-listbox/custom-listbox.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CustomListboxModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
