import React from "react";

export const SideMenu = ({children}) =>{
    return (
        <div className="nav--side-menu">
            <ul>
                {children}
            </ul>
        </div>
    )
}
