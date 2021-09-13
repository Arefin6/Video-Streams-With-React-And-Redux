import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    ) 

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
   ,document.querySelector('#root')
)