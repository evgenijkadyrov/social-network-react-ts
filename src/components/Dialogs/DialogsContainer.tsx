import React from "react";

import {addAnswerActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState()

    const onClickSentMessageHandler = () => {

        props.store.dispatch(addAnswerActionCreator())

    }
    const onChangeUpdateMessage = (newText: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (
        <Dialogs addAnswerActionCreator={onClickSentMessageHandler}
                 updateNewMessageText={onChangeUpdateMessage}
                 dialogsPage={state.dialogsPage}/>
    )
}