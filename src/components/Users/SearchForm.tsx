import React, {FC} from "react";
import {Field, useFormik} from "formik";
import {FilterType} from "../../redux/users-reducer";
type PropsType={
    onFilterChanged:(filter:FilterType)=>void
}
export const UsersSearchForm:FC<PropsType> = React.memo((props) => {
    const selectOptions = [
        { id: true, text: "Yes" },
        { id: false, text: "No" },
        { id: null, text: "Unknown" }
    ];

    const formik = useFormik({
        validate: () => {},
        initialValues: {
            term: '',
            friend:null
        },
        onSubmit: values => {

           const filter:FilterType={
               term:values.term,
               friend:values.friend==='null'?null:values.friend==='true'?true:false
           }
props.onFilterChanged(filter)
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







