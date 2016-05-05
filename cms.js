const STATUS_OPTIONS = ['Published', 'Draft', 'Archived'];

/*

	Page
	==================================================
	- Can belong to other posts
	- Can be as many levels deep as desired

*/ 
const sharedOptions = {
	title: '',
	status: '',
	slug: '', // Takes title unless specified
	content: '', // String of HTML content

	published_date: '',

	meta: {
		title: '',
		description: '',
		keywords: ['']

		google: '',
		twitter: '',
		github: '' // etc
	},
	id: ''
};

const page = {
	childPages: [pageA.id, postB.id, postC.id],
	childComponents: [], // I want to be able to add custom components within pages such as post feeds
	...sharedOptions
};


/*

	Post
	==================================================
	- Cannot have children
	- must belong to at least 1 category. 1st category is main_category. If no category is specified then it lives as a draft
*/
const post = {
	category: [''],
	main_category: category[0],
	...sharedOptions
};