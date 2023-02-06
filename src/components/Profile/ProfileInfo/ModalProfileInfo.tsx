import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {InfoCircleOutlined} from "@ant-design/icons";
import {ProfileDataForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";
import {EditUserProfileType, UserProfileType} from "../ProfileContainer";

type ModalProfileInfoType={
    showModalWindow:boolean
    callbackOk:()=>void
    profile:UserProfileType
    saveProfile:(profile:EditUserProfileType)=>void
    changeEditMode:(value:boolean)=>void
    editMode:boolean

}
export const ModalProfileInfo: React.FC<ModalProfileInfoType> = (props) => {
    const {showModalWindow,callbackOk,profile,saveProfile,changeEditMode,editMode}=props

       const closeEditMode = () => {

        changeEditMode(false);
    };

    return (
        <>
            <Modal title="Basic Modal" open={showModalWindow} onOk={callbackOk} onCancel={callbackOk} >
                <ProfileData profile={profile}/>
            </Modal>
            {editMode && <Modal footer={null} title="Basic Modal" open={editMode} onCancel={closeEditMode}>
                <ProfileDataForm changeEditMode={changeEditMode} profile={profile}
                                 saveProfile={saveProfile} />
            </Modal>}
        </>
    );
};

