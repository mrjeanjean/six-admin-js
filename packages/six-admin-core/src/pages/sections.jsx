import React from "react";
import {AddSectionButton} from "./add-section-button";
import {getSectionType} from "../components/sections/sectionBuilder";

const Section = ({section})=>{
    const sectionType = getSectionType(section.type);
    return (
        <div className="page-section">
            <sectionType.component section={section}/>
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
