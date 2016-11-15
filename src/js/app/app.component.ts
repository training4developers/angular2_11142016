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
		<div>
			<label>New Color</label>
			<input type="text" [(ngModel)]="newColor">
			<button type="button" (click)="addColor()">Add Color</button>
		</div>
	`
})
export class AppComponent {

	headerText: string = 'List of Colors';

	colors: string[] = ['red','white','blue','green','yellow'];

	newColor: string = '';

	addColor() {
		this.colors.push(this.newColor);
	}
}
