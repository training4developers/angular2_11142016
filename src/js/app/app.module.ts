import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import '../../css/styles.scss';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { CarTableComponent, CarViewRowComponent } from './components/car-table/car-table.component';

import { Cars } from './services/cars';

@NgModule({
	imports: [ BrowserModule, FormsModule, HttpModule ],
	declarations: [ AppComponent, HeaderComponent, ColorListComponent,
		ColorFormComponent, CarTableComponent, CarViewRowComponent ],
	providers: [ Cars ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }