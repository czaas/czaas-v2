import fetch from 'whatwg-fetch';
import request from 'request';

import { apiUrl } from './wp-const.js';

export default function getPages(){
	let pageRequest = new Promise((resolve, reject) => {
		request(`${apiUrl}/pages`, (err, response, body) => {
			if (!err && response.statusText === 'OK') {
				reject(err); return;
			} else {
				resolve(body); return;
			}
		});
	});

	pageRequest.then((res) => {
		console.log(JSON.parse(res));
	});
}

export function getAllPages(url) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	// lets us say "go get this"
	let pageRequest = new Promise((resolve, reject) => {

		request(`${apiUrl}/pages`, (err, response, body) => {

			// If we don't have an error AND the response is OK
			if (!err && response.statusText === 'OK') {

				reject(err); return; 
			} else {
				resolve(body); return;
			}
		});
	});

	return pageRequest; 

	// // Example of how you would handle this in server.js
	// 
	//	getAllPages.then((JSON_response) => {
	//		let object = JSON.parse(JSON_response);
	//	
	//		server_send_to_client(JSON.stringify(JSON_response_body));
	//	});
}