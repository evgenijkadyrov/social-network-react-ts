import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


let rootReducer=combineReducers({

    profilePage:profilePageReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
})
export type AppStateType=ReturnType<typeof rootReducer>


export let store =createStore(rootReducer)
