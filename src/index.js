import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './icomoon/style.css';
import './css/style.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
