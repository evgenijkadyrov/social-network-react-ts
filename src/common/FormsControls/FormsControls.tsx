import React from "react";
import styles from '../FormsControls/FormsControls.module.css';


type Props={
    input:any
    meta:any
}

export const TextArea=({input, meta, ...props}:Props)=>{
    const hasError=meta.touched&&meta.error
    return (
        <div className={styles.formControl+' '+ (hasError?styles.error:'')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError&&<span>{meta.error}</span> }
            </div>
        </div>
    )

}

export const Input=({input, meta, ...props}:Props)=>{
    const hasError=meta.touched&&meta.error
    return (
        <div className={styles.formControl+' '+ (hasError?styles.error:'')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError&&<span>{meta.error}</span> }
            </div>
        </div>
    )

}