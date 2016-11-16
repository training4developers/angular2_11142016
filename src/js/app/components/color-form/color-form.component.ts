import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'color-form',
	template: `<div>
		<label>New Color</label>
		<input type="text" [(ngModel)]="newColor">
		<button type="button" (click)="addColor()">Add Color</button>
	</div>`
})
export class ColorFormComponent {

	newColor: string = '';

	@Output()
	newColorAdded: EventEmitter<string> = new EventEmitter<string>();

	addColor() {
		this.newColorAdded.emit(this.newColor);
	}

}
