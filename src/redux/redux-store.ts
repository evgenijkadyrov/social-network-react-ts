import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {autherReducer} from "./auther-reducer";
import thunk,{ThunkAction,ThunkDispatch} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";
import {ActionsType as AppActionsType} from "./app-reducer";
import {ActionsType as AutherActionsType} from "./auther-reducer";
import {ActionsType as DialogsActionsType} from "./dialogs-reducer";
import {ActionsType as ProfileActionsType} from "./profilePage-reducer";
import {ActionsType as UsersActionsType} from "./users-reducer";

let rootReducer=combineReducers({

    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auther:autherReducer,
    form: formReducer,
    app:appReducer
})

export type AppStateType=ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(thunk)
));

//export let store =createStore(rootReducer, applyMiddleware(thunk))
type ActionsType=AppActionsType|AutherActionsType|DialogsActionsType|ProfileActionsType|UsersActionsType
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=ThunkDispatch<AppStateType,unknown,ActionsType>
export type AppThunk<ReturnType=void>=ThunkAction<ReturnType, AppStateType,unknown,ActionsType>


export type ActionsTypes<T> = T extends {[key:string]:(...args:any[])=>infer U}?U :never

    
//@ts-ignore
window.store=store

