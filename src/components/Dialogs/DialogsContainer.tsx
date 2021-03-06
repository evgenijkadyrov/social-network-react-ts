import React from "react";
import {addAnswer} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const mapStateToProps=(state:AppStateType)=>{
    return {
        dialogsPage: state.dialogsPage,

    }
}
const mapDispatchToProps=(dispatch:Dispatch) =>{
    return {

        addAnswer:(newMessageBody:any)=>{dispatch(addAnswer(newMessageBody))}
    }
}


export const DialogsContainer=compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)