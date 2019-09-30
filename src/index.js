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
        case 'FEEDBACK':
            return {...state, [action.propertyName]: action.propertyValue};
    
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
