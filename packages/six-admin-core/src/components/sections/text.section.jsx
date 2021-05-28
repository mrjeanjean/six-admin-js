import React, {useCallback} from "react";
import {TextareaField} from "../fields/textarea.field";
import {useDispatch} from "react-redux";
import {editSection} from "../../store/page-actions";

export const TextSection = ({section})=>{
    const dispatch = useDispatch();
    const onChangeHandler = useCallback(value=>{
        dispatch(editSection(section.id, value));
    }, [section])
    return (
        <div className="heading-section">
            <TextareaField onChange={onChangeHandler} value={section.content}/>
        </div>
    )
}
