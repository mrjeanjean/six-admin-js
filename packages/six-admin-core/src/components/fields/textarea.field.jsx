import React, {useCallback} from "react";

export const TextareaField = ({onChange, ...rest})=>{
    const onChangeHandler = useCallback((e)=>{
        onChange(e.target.value);
    }, [onChange]);

    return (
        <textarea
            placeholder="Votre contenu..."
            {...rest}
            onChange={onChangeHandler}
            className="textarea-field"
        />
    )
}
