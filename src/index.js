import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
