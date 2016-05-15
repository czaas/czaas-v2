import request from 'request';

import { menuApi } from './wp-const.js';

export function getMenus (){
	let menu = new Promise((resolve, reject) => {
		request(`${menuApi}/4`, (err, response, body) => {
			if (!err && response.statusText === 'OK') {
				reject(err);
				return;
			} else {
				resolve(body);
				return;
			}
		}); 
	});

	return menu;
}