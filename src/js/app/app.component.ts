import { Component } from '@angular/core';

interface Car {
	make: string,
	model: string,
	year: number,
	color: string,
	price: number
}

@Component({
	selector: 'my-app',
	template: `
		<header>{{headerText}}</header>
		<ul>
			<li *ngFor="let color of colors">{{color}}</li>
		</ul>
	`
})
export class AppComponent {

	headerText: string = 'List of Colors';

	colors: string[] = ['red','white','blue','green','yellow'];

	cars: Car[] = [
		{ make: 'a', model: 'b', year: 1234, color: 'f', price: 123 }
	]

}
