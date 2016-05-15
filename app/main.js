/*
This component is only used by the client
*/

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { configRoutesForClient } from './routes.js';

let config = window.reactConfig;
let clientRoutes = configRoutesForClient(config.routes);

ReactDom.render( 
	<Router routes={clientRoutes} history={browserHistory} />,
	document.getElementById('app')
);