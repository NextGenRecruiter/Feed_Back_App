import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const FeedBack ={
    feeling:0,
    understanding:0,
    supported:0,
    comment:''
}

const feedBackReducer = (state = FeedBack, action) => {
    switch (action.type){
        case 'FEELING':
            return {...state, feeling: action.payload};

        case 'UNDERSTANDING':
            return {...state, understanding: action.payload};

        case 'SUPPORTED':
            return {...state, supported: action.payload};
    
        case 'COMMENT':
            return {...state, comment: action.payload};

        case 'RESET':
            return FeedBack

        default:
            return state;

    }

}


const storeInstance = createStore (
    combineReducers({
    feedBackReducer,
    })
)

ReactDOM.render( <Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
