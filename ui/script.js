'use strict';
import './node_modules/font-awesome/css/font-awesome.css';
import './style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Picogram from './picogram';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider><Picogram /></MuiThemeProvider>, document.getElementById('picogram'));
