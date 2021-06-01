import React, {useCallback} from "react";
import {InputField} from "../fields/input.field";

export const HeadingSection = ({section, setContent})=>{
    const onChangeHandler = useCallback(value=>{
        setContent(value);
    }, [section]);

    return (
        <div className="heading-section">
            <InputField onChange={onChangeHandler} value={section.content}/>
        </div>
    )
}
