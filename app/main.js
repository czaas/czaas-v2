import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes } from './routes.js';

console.log(window.menu);

ReactDom.render(
	<Router routes={routes} history={browserHistory} />,
	document.getElementById('app')
);