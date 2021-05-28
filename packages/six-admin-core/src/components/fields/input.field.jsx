import React, {useCallback} from "react";

export const InputField = ({onChange, ...rest})=>{
    const onChangeHandler = useCallback((e)=>{
        onChange(e.target.value);
    }, [onChange]);

    return (
        <input {...rest} onChange={onChangeHandler} className="input-field"/>
    )
}
