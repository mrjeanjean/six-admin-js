import React from "react";
import {getSectionType} from "./sections/sectionBuilder";

export const Section = ({section})=>{
    const sectionType = getSectionType(section.type);
    return (
        <div className="page-section">
            <sectionType.component section={section}/>
        </div>
    )
}
