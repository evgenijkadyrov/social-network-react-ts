import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import {NewPostForm} from "./NewPostForm";
import {actions} from "../../../redux/profilePage-reducer";
import {useDispatch} from "react-redux";
import {PlusOutlined} from '@ant-design/icons';

export const AddNewPost: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const dispatch = useDispatch()
    const showModal = () => {
        setOpen(true);
    };
       const createPost = (values: { newPostBody: string }) => {
        dispatch(actions.addPost(values.newPostBody))
        setOpen(false)
    }

    const handleCancel = () => {

        setOpen(false);
    };

    return (
        <>

            <Button type="text" onClick={showModal}>
              Add post <PlusOutlined/>
            </Button>
            <Modal
                title="Add new post"
                open={open}
               confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <NewPostForm callback={createPost} textAreaTitle={'Enter your post'} buttonName={'Add post'}/>
            </Modal>
        </>
    );
};

