import React from "react";
import {Section} from "./section";

export const Sections = ({sections = []})=>{
    return (
        <div className="page-sections">
            {sections.map((section, key)=>(
                <Section section={section} key={key}/>
            ))}
        </div>
    )
}
