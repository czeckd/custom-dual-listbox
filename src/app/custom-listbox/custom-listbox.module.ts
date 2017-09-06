import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';


import { CustomListboxComponent } from './custom-listbox.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		CustomListboxComponent
	],
	exports: [
		CustomListboxComponent
	]
})
export class CustomListboxModule { }
