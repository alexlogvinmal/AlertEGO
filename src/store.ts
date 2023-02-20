import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './redux/reducer';

export const store = createStore(postReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
