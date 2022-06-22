import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createRoot} from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


root.render(
  <React.StrictMode>
{app}
  </React.StrictMode>
);