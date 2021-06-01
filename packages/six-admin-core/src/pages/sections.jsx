import React, {useCallback} from "react";
import {AddSectionButton} from "./add-section-button";
import {useSectionTypes} from "../core/admin.hooks";
import {useDispatch} from "react-redux";
import {editSection} from "../store/page-actions";

const Section = ({section})=>{
    const dispatch = useDispatch();
    const {getSectionType} = useSectionTypes();
    const sectionType = getSectionType(section.type);

    const setContent = useCallback((content)=>{
            dispatch(editSection(section.id, content));
    }, [section.id]);

    return (
        <div className="page-section">
            <sectionType.component section={section} setContent={setContent}/>
        </div>
    )
}

export const Sections = ({sections = []})=>{
    return (
        <div className="page-sections">
            <AddSectionButton position={0}/>
            {sections.map((section, index)=>(
                <div key={section.id}>
                    <Section section={section}/>
                    <AddSectionButton position={index + 1}/>
                </div>
            ))}
        </div>
    )
}
