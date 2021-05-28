import React, {useCallback} from "react";

export const TextareaField = ({onChange, ...rest})=>{
    const onChangeHandler = useCallback((e)=>{
        onChange(e.target.value);
    }, [onChange]);

    return (
        <textarea
            {...rest}
            onChange={onChangeHandler}
            className="textarea-field"
        />
    )
}
