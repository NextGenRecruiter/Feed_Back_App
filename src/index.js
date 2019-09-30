import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const FeedBack ={
    feeling:0,
    understanding:0,
    supported:0,
    comment:''
}

const feedBackReducer = (state = FeedBack, action) => {
    switch (action.type){
        case 'FEELING':
            state.feeling = action.payload
            return state;
        case 'UNDERSTANDING':
            state.understanding = action.payload
            return state;

        case 'SUPPORTED':
            state.supported = action.payload
            return state;
    
        case 'COMMENT':
            state.comment = action.payload
            return state;

        case 'RESET':
            return FeedBack

        default:
            return state;

    }

}


const storeInstance = createStore (
    combineReducers({
    feedBackReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render( <Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
