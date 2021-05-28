import React, {useCallback} from "react";
import {InputField} from "../fields/input.field";
import {useDispatch} from "react-redux";
import {editSection} from "../../store/page-actions";

export const HeadingSection = ({section})=>{
    const dispatch = useDispatch();

    const onChangeHandler = useCallback(value=>{
        dispatch(editSection(section.id, value))
    }, [section])
    return (
        <div className="heading-section">
            <InputField onChange={onChangeHandler} value={section.content}/>
        </div>
    )
}
