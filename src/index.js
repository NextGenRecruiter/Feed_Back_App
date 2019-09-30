import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const FeedBack ={
    feelings: 0,
    understanding:0,
    supported:0,
    comment:''
}

const feedBackReducer = (state = FeedBack, action) => {
    if (action.type==='FEEDBACK') {
        return {...state, [action.nameInRedux]: action.value};
    }

    if (action.type==='RESET') {
        return FeedBack;
    }

    return state;
}


const storeInstance = createStore (
    combineReducers({
    feedBackReducer,
    })
)

ReactDOM.render( <Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
