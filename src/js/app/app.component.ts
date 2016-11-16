import { Component, OnInit } from '@angular/core';
import { Car } from './interfaces/car';
import { Cars } from './services/cars';

@Component({
	selector: 'my-app',
	template: `

		<!-- component 1 -->
		<header [headerText]="headerCaption"></header>

		<!-- component 2 -->
		<color-list [colors]="colors"></color-list>

		<!-- component 3 -->
		<color-form (newColorAdded)="addColor($event)"></color-form>

		<car-table [cars]="carList"></car-table>
	`
})
export class AppComponent implements OnInit {

	headerCaption: string = 'List of Colors';

	colors: string[] = ['red','white','blue','green','yellow'];

	constructor(private cars: Cars) { }

	carList: Car[];

	ngOnInit() {
		this.cars.getAll().then(cars => this.carList = cars);
	}
 
	addColor(newColor: string) {
		// mutates the array, when adding the color
		this.colors.push(newColor);
	}
}
