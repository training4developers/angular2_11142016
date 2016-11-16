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

		<car-table [cars]="cars"></car-table>

	`
})
export class AppComponent {

	headerCaption: string = 'List of Colors';

	colors: string[] = ['red','white','blue','green','yellow'];

	cars: Car[] = [
		{ id: 1, make: 'Ford', model:'Fusion', year:2004 },
		{ id: 2, make: 'Chevy', model:'Impala', year:2004 },
		{ id: 3, make: 'Tesla', model:'S', year:2014 }
	]
 
	addColor(newColor: string) {
		// mutates the array, when adding the color
		this.colors.push(newColor);
	}
}
