import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {InfoCircleOutlined} from "@ant-design/icons";
import {ProfileDataForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

type ModalProfileInfoType={

}
export const ModalProfileInfo: React.FC<ModalProfileInfoType> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <p style={{cursor:'pointer'}} onClick={showModal}>{<InfoCircleOutlined />} More information</p>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            </Modal>
        </>
    );
};

