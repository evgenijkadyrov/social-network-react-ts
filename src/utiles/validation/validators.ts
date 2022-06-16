import React from "react";

export const requiredField = (value: any) => {
    if (value) return undefined

    return 'Field is required'
}
export const maxlengthCreator = (maxLength: number) =>    (value: any) => {
        if (value && value.length > maxLength)
            return 'Field is too long';

        return undefined
    }
