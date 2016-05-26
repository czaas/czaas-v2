import { apiUrl } from './wp-const.js';

export function getPosts (postSlug) {
	return fetch(`${apiUrl}/${postSlug}`);
}