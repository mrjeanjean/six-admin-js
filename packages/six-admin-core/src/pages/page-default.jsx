import React from 'react';
import {Sections} from "./sections";

export const PageDefault = ({page})=>{
    return (
        <div>
            <p>MA PAGE PAR DEFAUT</p>
            <h1>{page.name}</h1>
            <Sections sections={page.sections}/>
        </div>
    )
}
