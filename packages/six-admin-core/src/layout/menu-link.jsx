import React from "react";
import {NavLink} from "react-router-dom";

export const MenuLink = ({children, ...rest}) => {
    return (
        <li>
            <NavLink {...rest} exact={true}>{children}</NavLink>
        </li>
    )
}
