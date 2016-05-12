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

export function getPage(url) {
	let pageRequest = new Promise((resolve, reject) => {
		request(`${apiUrl}/pages`, (err, response, body) => {
			if (!err && response.statusText === 'OK') {
				reject(err); return;
			} else {
				resolve(body); return;
			}
		});
	});

	return pageRequest;
}