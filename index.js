import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';

export let initialState={
  appreducer:{
      data:{
          name:"navneet"
      },
      appState:{
        test:true,
        live:true
      }   
  }
};
const store = configureStore(initialState);
window.store=store;
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();