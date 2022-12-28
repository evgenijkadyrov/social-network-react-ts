import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auther-reducer";

const initialState = {
    initialized: false
}

export type InitializedSuccessType = ReturnType<typeof initialisedSuccess>
export type InitialStateType = typeof initialState

type ActionsType = InitializedSuccessType

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initialisedSuccess = () => ({
    type: 'INITIALIZED_SUCCESS',
    } as const)

//thunk
export const initializedApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    //@ts-ignore
    promise.then(() => {
        dispatch(initialisedSuccess())
    })


}

export default appReducer
