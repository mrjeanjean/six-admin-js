import React from "react";

export const Icon = ({icon, prefix = "fas fa-"})=>{
    return (
        <i className={`${prefix}${icon}`}/>
    )
}
