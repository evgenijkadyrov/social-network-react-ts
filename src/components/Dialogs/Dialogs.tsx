import React from "react";
import s from './Dialogs.module.css';

type DialogsPropsType = {}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={`${s.dialog} ${s.active}`}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    What are you doing now?
                </div>
            </div>
        </div>
    )
}