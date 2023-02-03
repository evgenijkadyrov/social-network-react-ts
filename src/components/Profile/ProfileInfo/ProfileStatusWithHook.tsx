import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {updateStatus} from "../../../redux/profilePage-reducer";
import {useDispatch} from "react-redux";
import {EditOutlined, InfoCircleOutlined} from "@ant-design/icons";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string ) => void
}

export const ProfileStatusWithHook: FC<ProfileStatusPropsType> = (props) => {
const{status}=props
    const [editMode, setEditMode] = useState(false)
    const [statusNew, setStatus] = useState(status)
const dispatch=useDispatch()
    useEffect(() => {
        setStatus(status)
    }, [status])
    const activateEditMode = () => {

        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateStatus(statusNew))
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {status || 'no status'}
                        <span style={{cursor:'pointer'}} onClick={activateEditMode}>{<EditOutlined/>} </span>
                    </span>

                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                           value={statusNew}/>
                </div>}
        </div>
    )
}

export default ProfileStatusWithHook;