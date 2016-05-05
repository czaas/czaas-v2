import fetch from 'whatwg-fetch';

const apiRoot = 'http://localhost:8888/wordpress/wp-json/wp/v2';

export default function getPages(){
	fetch(`${apiRoot}/pages`).then((res) => {
		return res;
	});
}