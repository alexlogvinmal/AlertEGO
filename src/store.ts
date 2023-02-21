import { postReducer } from './redux/news/reducer';
import { loginReducer } from './redux/auth/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';



const reducer = {postReducer,loginReducer}
const middleware = getDefaultMiddleware({
    immutableCheck:false,
    thunk:true,
})

export const store = configureStore({reducer, middleware})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
