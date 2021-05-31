import React from 'react';
import {Sections} from "six-admin-core";

export const Page = ({page})=>{
    return (
        <div>
            <h1>{page.name}</h1>
            <Sections sections={page.sections}/>
        </div>
    )
}
