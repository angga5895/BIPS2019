import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './icons/fontawesome.css';
import './icons/ionicons.css';
import './icons/linearicons.css';
import './icons/open-iconic.css';
import './icons/pe-icon-7-stroke.css';
import './icons/icofont.css';
import './icons/font-bips.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();