import React from 'react';
import {useNavigate} from "react-router-dom";
import s from "../../components/Dialogs/Message/Messages.module.css";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Button} from "antd";

const ButtonBack = () => {
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1,)
    }
    return (
                   <Button onClick={handleBack} className={s.btnBack} type={'text'}><ArrowLeftOutlined />back</Button>
           );
};

export default ButtonBack;