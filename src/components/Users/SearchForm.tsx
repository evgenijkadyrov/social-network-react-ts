import React, {FC} from "react";
import {useFormik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getFilters} from "../../redux/users-selector";
import {Button, Input, Select} from "antd";
import {SearchOutlined } from '@ant-design/icons';

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged}) => {
    const filter = useSelector(getFilters)
    const formik = useFormik({
        enableReinitialize: true,
        validate: () => {
        },
        initialValues: {
            term: filter.term,
            friend: String(filter.friend)
        },
        onSubmit: values => {

            const filter: FilterType = {
                term: values.term,
                friend: values.friend === 'null' ? null : values.friend === 'true'
            }
            onFilterChanged(filter)
            formik.resetForm()
        }

    })

    return (

        <form onSubmit={formik.handleSubmit}>

            <Input style={{ width: 250, marginRight:'5px' }} placeholder={'enter user name'} {...formik.getFieldProps('term')}/>
            <Select style={{ width: 150,marginRight:'5px' }} {...formik.getFieldProps('friend')}>
                <option value="null">All</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </Select>

            <Button htmlType={'submit'} type={'primary'} icon={<SearchOutlined />} color={'primary'}>
                Find
            </Button>
        </form>
    );
});







