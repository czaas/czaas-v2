/*
This component is only used by the client
*/

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

let config = window.reactConfig;

ReactDom.render( 
	<Router routes={config.routes} history={browserHistory} />,
	document.getElementById('app')
);