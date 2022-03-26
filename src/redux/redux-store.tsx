import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reduces=combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer
})
export let store =createStore(reduces)