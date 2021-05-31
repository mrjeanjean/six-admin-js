import React, {useCallback} from "react";
import {addSection} from "../store/page-actions";
import {useDispatch} from "react-redux";

export const SectionToolbar = ({position})=>{
    const dispatch = useDispatch();

    const addSectionHandler = useCallback((type) => {
        dispatch(addSection(type, position));
    }, [position]);

    return (
        <div className="section-toolbar">
            <button type="button" className="section-toolbar__button" onClick={()=>addSectionHandler("text")}><span>1</span></button>
            <button type="button" className="section-toolbar__button" onClick={()=>addSectionHandler("text")}><span>3</span></button>
            <button type="button" className="section-toolbar__button" onClick={()=>addSectionHandler("text")}><span>4</span></button>
            <button type="button" className="section-toolbar__button" onClick={()=>addSectionHandler("text")}><span>5</span></button>
        </div>
    )
}
