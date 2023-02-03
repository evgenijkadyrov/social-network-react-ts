import React from 'react';
import {Image, Space} from 'antd';
import {UserType} from "../../redux/users-reducer";
import avatarIcon from "../../common/avatars/user.png";

type userFoto = {
    user: UserType
}
export const UserFoto: React.FC<userFoto> = (props) => {
    const {user} = props


    return (
        <Space size={12}>
            <Image
                width={80}
                style={{borderRadius: '50%'}}
                src={user.photos.large !== null ? user.photos.large : String(avatarIcon)}
                placeholder={
                    <Image
                        preview={false}
                        src={user.photos.small !== null ? user.photos.small : String(avatarIcon)}
                        width={50}
                    />
                }
            />

        </Space>
    );
};

