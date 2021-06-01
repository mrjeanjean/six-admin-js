import React, {useCallback} from "react";

export const InputField = ({onChange, value, ...rest})=>{
    const onChangeHandler = useCallback((e)=>{
        onChange(e.target.value);
    }, [onChange]);

    return (
        <input
            placeholder="Votre contenu..."
            {...rest}
            value={value}
            onChange={onChangeHandler}
            className="input-field"
        />
    )
}
