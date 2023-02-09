import React from 'react';

import {maxlengthCreator} from "../../../utiles/validation/validators";
import s from './AddMessageForm.module.css'
import {useDispatch} from "react-redux";
import {requestMessage} from "../../../redux/dialogs-reducer";
import {useParams} from "react-router-dom";
import {NewMessageForm} from "./NewMessageForm";

export type FormDataType = {}
const maxLength100 = maxlengthCreator(100)
export const AddMessageForm: React.FC = (props) => {
    const {userId} = useParams()
    const dispatch = useDispatch()

    const sentMessage = (newPostBody: string ) => {

        if(userId)
        dispatch(requestMessage(userId, newPostBody))
    }
    return (<div className={s.container}>
            <NewMessageForm callback={sentMessage} textAreaTitle={''}
                            buttonName={'Sent messagesss'}/>

        </div>


    );
};
