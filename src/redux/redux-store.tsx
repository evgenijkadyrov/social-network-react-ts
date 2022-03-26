import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";


let rootReducer=combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer
})
export type AppStateType=ReturnType<typeof rootReducer>


export let store =createStore(rootReducer)