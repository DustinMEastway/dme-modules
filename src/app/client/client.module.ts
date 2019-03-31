import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { SharedModule } from 'app/shared/shared.module';

import { ClientRoutingModule } from './client-routing.module';
import { ClientScreenComponent } from './client-screen.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatToolbarModule,
		SharedModule,
		ClientRoutingModule
	],
	declarations: [
		ClientScreenComponent,
		ScreenComponent
	]
})
export class ClientModule { }