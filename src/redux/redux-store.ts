import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {autherReducer} from "./auther-reducer";
import thunk from 'redux-thunk'

let rootReducer=combineReducers({

    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auther:autherReducer
})

export type AppStateType=ReturnType<typeof rootReducer>


export let store =createStore(rootReducer, applyMiddleware(thunk))
//@ts-ignore
window.store=store

