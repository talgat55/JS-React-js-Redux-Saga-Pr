import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider}  from 'react-redux';
import thunk from 'redux-thunk';
import {sagaWatcher} from "./redux/sagas";
import * as serviceWorker from './serviceWorker';
import {rootReducer} from "./redux/rootReducer";
import {forbiddenWordsMiddleWare} from "./redux/middleware";
import createSagaMiddleware from 'redux-saga';
import App from './App';

const saga = createSagaMiddleware();


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk,
            saga,
            forbiddenWordsMiddleWare
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);
saga.run(sagaWatcher);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
