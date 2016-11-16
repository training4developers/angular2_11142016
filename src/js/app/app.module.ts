import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import '../../css/styles.scss';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, HeaderComponent, ColorListComponent, ColorFormComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }