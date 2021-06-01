import React, {useCallback} from "react";
import {TextareaField} from "../fields/textarea.field";

export const TextSection = ({section, setContent}) => {
    const onChangeHandler = useCallback(value => {
        setContent(value);
    }, [section]);

    return (
        <div className="heading-section">
            <TextareaField onChange={onChangeHandler} value={section.content}/>
        </div>
    )
}
