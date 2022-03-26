import React from "react";

import {addAnswerActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsPropsType = {}

export const DialogsContainer = (props: DialogsPropsType) => {


    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const onClickSentMessageHandler = () => {
                    store.dispatch(addAnswerActionCreator())
                }
                const onChangeUpdateMessage = (newText: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(newText))
                }
                return <Dialogs addAnswerActionCreator={onClickSentMessageHandler}
                                updateNewMessageText={onChangeUpdateMessage}
                                dialogsPage={state.dialogsPage}/>
            }

        }

        </StoreContext.Consumer>

    )
}