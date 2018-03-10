import ReactDOM from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import { devToolsEnhancer } from 'redux-devtools-extension';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const rootReducer = combineReducers({
  form: formReducer
});

const middlewares = compose(applyMiddleware(apiMiddleware), devToolsEnhancer());

const store = createStore(rootReducer, {}, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
