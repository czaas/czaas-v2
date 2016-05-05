import request from 'request';

let availableMenus = 'http://localhost:8888/wordpress/wp-json/wp-api-menus/v2/menus/';
let specificMenu = 'http://localhost:8888/wordpress/wp-json/wp-api-menus/v2/menus/4';

export function getMenus (){

	return new Promise((resolve, reject) => {
		request(specificMenu, (err, response, body) => {
			if (!err && response.statusText === 'OK') {
				reject(err); return;
			} else {
				resolve(body);
			}
		});
	});
}