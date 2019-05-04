import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from "@angular/router";

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	rows : any = new Array<Employee>();
	expanded = {};
	timeout: any;

	private isLoading: boolean = false;
	@ViewChild('myTable') table;

	constructor( 
		private service : EmployeeService,
		private router: Router) { }

	ngOnInit() {
		console.log(this.getList());
	}

	getList() {

		this.rows = this.service.getList();
		console.log("Hello World....");
		// this.service.getList().subscribe( data => {
		// 	this.rows = data;

		// });
	}

	onPage(event) {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			console.log('paged!', event);
		}, 100);
	}

	getRowHeight(row) {
		return row.height;
	}

	gotoRegister() {
		this.router.navigate(['/auth']);
	}

}
