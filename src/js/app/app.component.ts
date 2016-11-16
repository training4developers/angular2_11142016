import { Component } from '@angular/core';
import { Car } from './interfaces/car';

@Component({
	selector: 'my-app',
	template: `

		<!-- component 1 -->
		<header [headerText]="headerCaption"></header>

		<!-- component 2 -->
		<color-list [colors]="colors"></color-list>

		<!-- component 3 -->
		<color-form (newColorAdded)="addColor($event)"></color-form>
	`
})
export class AppComponent {

	headerCaption: string = 'List of Colors';

	colors: string[] = ['red','white','blue','green','yellow'];

	addColor(newColor: string) {
		// mutates the array, when adding the color
		this.colors.push(newColor);
	}
}
