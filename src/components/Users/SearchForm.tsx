import React, {FC} from "react";
import {useFormik} from "formik";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getFilters} from "../../redux/users-selector";

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

            <input   {...formik.getFieldProps('term')}/>
            <select  {...formik.getFieldProps('friend')}>
                <option value="null">All</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </select>

            <button type={'submit'} color={'primary'}>
                Find
            </button>
        </form>
    );
});







