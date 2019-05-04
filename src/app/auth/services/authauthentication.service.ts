import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthauthenticationService {

  constructor() { }

  registration(payload: any) {

  	let id = Math.random()*10767;
  	let getCurrentUserList = JSON.parse(localStorage.getItem('userList'));
  	if(getCurrentUserList && getCurrentUserList.length) {
  		payload.id = id;
  		getCurrentUserList.push(payload);
  		localStorage.setItem('userList', JSON.stringify(getCurrentUserList));
  		return payload;
  	} 

  	let users = [payload];

  	localStorage.setItem('userList', JSON.stringify(users));

  	return payload;

  }
}
