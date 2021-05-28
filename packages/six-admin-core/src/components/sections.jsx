import React from "react";
import {Section} from "./section";
import {AddSectionButton} from "./add-section-button";

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
