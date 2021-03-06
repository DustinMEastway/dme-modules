import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TskReadonlyFieldModule } from '@tstack/client';
import { TskNavMenuModule } from 'app/../../projects/client/src/lib/nav-menu/nav-menu.module';

import { NavMenuNestingComponent } from './client/nav-menu-nesting/nav-menu-nesting.component';
import { ReadonlyFieldAppearanceComponent } from './client/readonly-field-appearance/readonly-field-appearance.component';
import { CancellableEventComponent } from './core/cancellable-event/cancellable-event.component';
import { DelayableEventComponent } from './core/delayable-event/delayable-event.component';
import { HasDuplicatesObjectsComponent } from './core/has-duplicates-objects/has-duplicates-objects.component';
import { HasDuplicatesPrimativesComponent } from './core/has-duplicates-primatives/has-duplicates-primatives.component';
import { ObjectIsBetweenComponent } from './core/object-is-between/object-is-between.component';

export const exampleComponents = [
	CancellableEventComponent,
	DelayableEventComponent,
	HasDuplicatesObjectsComponent,
	HasDuplicatesPrimativesComponent,
	NavMenuNestingComponent,
	ObjectIsBetweenComponent,
	ReadonlyFieldAppearanceComponent
];

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		ReactiveFormsModule,
		TskNavMenuModule,
		TskReadonlyFieldModule
	],
	declarations: [
		...exampleComponents
	],
	entryComponents: [
		...exampleComponents
	],
	exports: [
		...exampleComponents
	]
})
export class ExamplesModule { }

export {
	ObjectIsBetweenComponent
};
