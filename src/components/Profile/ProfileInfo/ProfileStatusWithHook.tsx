import React, {ChangeEvent, useState} from 'react';
type ProfileStatusPropsType={
    status:string
    updateStatus:(status:string|null)=>void
}

export const ProfileStatusWithHook =(props:ProfileStatusPropsType)=> {

const [editMode, setEditMode]=useState(false)
const [status, setStatus]=useState(props.status)


   const activateEditMode = () => {

       setEditMode(true)
    }
   const deactivateEditMode = () => {
       setEditMode(false)
       props.updateStatus(status)
    }
   const onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{

       setStatus(e.currentTarget.value)}




        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status||'no status'}</span>
                </div>}
                {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
                </div>}
            </div>
        )
}


export default ProfileStatusWithHook;