import s from "./ProfileInfo.module.css";
import React, {FC} from "react";

export const Contact:FC<ContactPropsType> = (props) => {
    const {contactKey, contactValue} = props
    return (
        <div className={s.contact}>
            {contactKey}:{contactValue}
        </div>
    )
}
type ContactPropsType = {
    contactKey: string
    contactValue: string
}