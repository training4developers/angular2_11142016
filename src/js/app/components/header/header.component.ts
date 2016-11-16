import { Component, Input } from '@angular/core';

@Component({
	selector: "header",
	template: `<h1>{{headerText}}</h1>`
})
export class HeaderComponent {

	@Input()
	headerText: string;

}