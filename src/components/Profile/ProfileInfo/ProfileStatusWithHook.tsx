import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string ) => void
}

export const ProfileStatusWithHook: FC<ProfileStatusPropsType> = (props) => {
const{status,updateStatus}=props
    const [editMode, setEditMode] = useState(false)
    const [statusNew, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])
    const activateEditMode = () => {

        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(statusNew)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}>{status || 'no status'}</span>
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