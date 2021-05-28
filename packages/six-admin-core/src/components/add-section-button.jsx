import React, {useCallback} from "react";
import {addSection} from "../store/page-actions";
import {getUniqueID} from "../helpers";
import {useDispatch} from "react-redux";

export const AddSectionButton = ({position})=>{
    const dispatch = useDispatch();
    const addSectionHandler = useCallback(()=>{
        dispatch(addSection({
            id: getUniqueID(),
            type: 'text',
            content: ''
        }, position))
    }, [])

    return (
        <div className="add-section-button">
            <button onClick={addSectionHandler}>+</button>
        </div>
    )
}
