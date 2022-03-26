import React from "react";
import {addAnswerActionCreator,  updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps=(state:AppStateType)=>{
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps=(dispatch:Dispatch) =>{
    return {
        updateNewMessageText:(newText:string)=>{dispatch(updateNewMessageTextActionCreator(newText))},
        addAnswerActionCreator:()=>{dispatch(addAnswerActionCreator())}
    }
}
export const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)