import { Component, Input } from '@angular/core';

@Component({
	selector: 'color-list',
	template: `<ul>
		<li *ngFor="let color of colors">{{color}}</li>
	</ul>`
})
export class ColorListComponent { 

	@Input()
	colors: string[];
}