import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car'; 


@Component({
	selector:'tr.car-view-row',
	template: `<td>{{car.make}}</td>
		<td>{{car.model}}</td>
		<td>{{car.year}}</td>
		<td><button (click)="editCar()">Edit</button></td>`
})
export class CarViewRowComponent {

	@Input()
	car: Car;

	@Output()
	edit: EventEmitter<number> = new EventEmitter<number>();

	editCar() {
		this.edit.emit(this.car.id);
	}

}


@Component({
	selector:'car-table',
	template: `
		<table class="table table-striped">
			<tbody>
				<template ngFor let-car [ngForOf]="cars">
					<tr class="car-view-row" *ngIf="editRowId !== car.id" [car]="car" (edit)="displayCarId($event)"></tr>
					<tr class="car-edit-row" *ngIf="editRowId === car.id" [car]="car" (edit)="displayCarId($event)"></tr>
				</template>
			</tbody>
		</table>
	`
})
export class CarTableComponent {

	@Input()
	cars: Car[]

	editRowId: number;

	displayCarId(carId: number) {
		this.editRowId = carId;
		console.log(carId);
	}

}