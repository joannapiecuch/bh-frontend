import ReactDOM from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import { devToolsEnhancer } from 'redux-devtools-extension';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppContainer from './containers/app/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {errorMiddleware} from './redux/middlewares/errorMiddleware';
import {reducer as notifications} from 'react-notification-system-redux';


const rootReducer = combineReducers({
  form: formReducer,
  notifications
});

const middlewares = compose(applyMiddleware(apiMiddleware, errorMiddleware), devToolsEnhancer());
const store = createStore(rootReducer, {}, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
