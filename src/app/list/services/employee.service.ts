import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	//  this we can make as environment configurable  
	private URL : string = "http://jsonplaceholder.typicode.com";


	constructor(
		private http: HttpClient
		) { }

	getList() {
		let userList = JSON.parse(localStorage.getItem('userList'));

		if(userList) {
			return userList;
		}
		return false;
	}

}
