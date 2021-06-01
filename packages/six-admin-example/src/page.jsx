import React from 'react';
import {InputField, Sections} from "six-admin-core";

export const Page = ({page, setPageAttribute})=>{
    return (
        <div>
            <InputField type="text" value={page.title} onChange={value=>setPageAttribute("title", value)}/>
            <hr/>
            <Sections sections={page.sections}/>
        </div>
    )
}
