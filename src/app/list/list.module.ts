import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EmployeeService } from './services';

import { 
	ListComponent 
} from './components';
import { listRouting } from './list.routing';


@NgModule({
	imports: [
	CommonModule,
	listRouting,
	NgxDatatableModule,
	FormsModule,
	HttpModule,
    HttpClientModule,
	],
	declarations: [
	ListComponent
	],
	providers: [EmployeeService]
})
export class ListModule { }
