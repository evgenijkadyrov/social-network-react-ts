import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";

let reduces=combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer
})
export let store:StoreType =createStore(reduces)