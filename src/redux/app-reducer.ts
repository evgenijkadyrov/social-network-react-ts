import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auther-reducer";
import {connect} from "react-redux";

const initialState: InitialStateType = {
    initialized:false

}

export type SetUserDataType = ReturnType<typeof initialisedSuccess>
export type InitialStateType = {

    initialized: boolean
}
type ActionsType = SetUserDataType

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {...state, initialized:true}
        default:
            return state
    }
}

export const initialisedSuccess = () => ({
    type: 'INITIALIZED_SUCCESS',

} as const)

//thunk

export const initializedApp = ():AppThunk =>(dispatch)=> {
   let promise=dispatch(getAuthUserData());

   //@ts-ignore
   promise.then(()=>{
        dispatch(initialisedSuccess())
    })


}


export default appReducer
