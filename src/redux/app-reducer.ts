import {ActionsTypes, AppThunk} from "./redux-store";
import {getAuthUserData} from "./auther-reducer";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}
//actions
export const actions = {
    initialisedSuccess: () => ({
        type: 'INITIALIZED_SUCCESS',
    } as const)

}

//thunk
export const initializedApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initialisedSuccess())
        })
}
//types
export type ActionsType = ActionsTypes<typeof actions>
export type InitialStateType = typeof initialState

export default appReducer
