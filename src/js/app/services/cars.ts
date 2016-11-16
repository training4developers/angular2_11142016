import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';

import { Car } from '../interfaces/car';


@Injectable()
export class Cars {

	constructor(private http: Http) { }

	getAll() : Promise<Car[]> {
		return this.http.get('http://localhost:3010/cars').toPromise().then(function(res) {
			return res.json();
		});
	}

}