import React from "react";
import styles from '../FormsControls/FormsControls.module.css';
import {Field} from "redux-form";
import {requiredField} from "../../utiles/validation/validators";



type Props={
    input:any
    meta:any
    children:React.ReactNode;
}

const FormControl=({input, meta,children, ...props}:Props)=>{

    const hasError=meta.touched&&meta.error

    return (
        <div className={styles.formControl+' '+ (hasError?styles.error:'')}>
            <div>

                {children}

            </div>
            <div>
                {hasError&&<span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const TextArea=(props:Props)=>{
const {input, meta, children, ...restProps}=props
    return (
        <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>

              )

}

export const Input=(props:Props)=>{
    const {input, meta, children, ...restProps}=props
    return (
        <FormControl {...props} > <input {...input} {...restProps}/></FormControl>

    )

}
export const FieldCreator=(placeholder:string='', name:string, component?:any, validate?:any, props?:{type:string}, text:string|null='')=>{
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate}
               {...props}/>
        {text}
    </div>
}