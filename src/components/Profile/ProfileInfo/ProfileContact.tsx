import s from "./ProfileInfo.module.css";
import React from "react";

type ContactPropsType = {
    contactKey: string
    contactValue: string
}
export const Contact = (props: ContactPropsType) => {
    const {contactKey, contactValue} = props
    return (
        <div className={s.contact}>
            {contactKey}:{contactValue}
        </div>
    )
}