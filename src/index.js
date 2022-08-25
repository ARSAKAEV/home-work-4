import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import {createStore} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'


const initialState = [
  {
    text: 'Выучить JS',
    done: true
  },
  {
    text: 'Выучить React',
    done: true
  },
  {
    text: 'Выучить TS',
    done: true
  },
]

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'delete' : 
      return state.filter((item, index) => {
        if(action.payload === index){
          return false
        } else{
          return true
        }
      })

    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.log(initialState)