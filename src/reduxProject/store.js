import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import { chatsReducer } from './reducers/chatReducer/chatsReducer';
import { messagesReducer } from './reducers/messageReducer/messagesReducer';
import { toggleReducer } from './reducers/toggleReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reducer = combineReducers( {
	
	toggle: toggleReducer,
	messages: messagesReducer,
	chats: chatsReducer
})

export const store = createStore(reducer, composeEnhancers(applyMiddleware()))

//toggleReducer